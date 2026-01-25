terraform {
  required_version = ">= 1.0.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "chasethedeveloper-terraform-state"
    key    = "portfolio/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

resource "cloudflare_pages_project" "portfolio" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = "main"

  build_config {
    build_command   = "npm run build:worker"
    destination_dir = ".open-next"
  }

  source {
    type = "github"
    config {
      owner                         = var.github_owner
      repo_name                     = var.github_repo
      production_branch             = "main"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "custom"
      preview_branch_includes       = ["develop", "feature/*"]
    }
  }

  deployment_configs {
    production {
      compatibility_date  = "2024-09-23"
      compatibility_flags = ["nodejs_compat"]

      environment_variables = {
        NODE_VERSION      = "20"
        AWS_REGION        = var.aws_region
        SES_FROM_EMAIL    = var.ses_from_email
        CONTACT_EMAIL     = var.contact_email
      }

      secrets = {
        AWS_ACCESS_KEY_ID     = aws_iam_access_key.ses_sender.id
        AWS_SECRET_ACCESS_KEY = aws_iam_access_key.ses_sender.secret
      }
    }

    preview {
      compatibility_date  = "2024-09-23"
      compatibility_flags = ["nodejs_compat"]

      environment_variables = {
        NODE_VERSION      = "20"
        AWS_REGION        = var.aws_region
        SES_FROM_EMAIL    = var.ses_from_email
        CONTACT_EMAIL     = var.contact_email
      }

      secrets = {
        AWS_ACCESS_KEY_ID     = aws_iam_access_key.ses_sender.id
        AWS_SECRET_ACCESS_KEY = aws_iam_access_key.ses_sender.secret
      }
    }
  }
}

# =============================================================================
# AWS SES Configuration
# =============================================================================

# Email identity for sending emails
resource "aws_ses_email_identity" "sender" {
  email = var.ses_from_email
}

# IAM user for SES access
resource "aws_iam_user" "ses_sender" {
  name = "${var.project_name}-ses-sender"
}

# IAM policy for sending emails via SES
resource "aws_iam_policy" "ses_send" {
  name        = "${var.project_name}-ses-send-policy"
  description = "Policy to allow sending emails via SES"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = "*"
        Condition = {
          StringEquals = {
            "ses:FromAddress" = var.ses_from_email
          }
        }
      }
    ]
  })
}

# Attach policy to user
resource "aws_iam_user_policy_attachment" "ses_sender" {
  user       = aws_iam_user.ses_sender.name
  policy_arn = aws_iam_policy.ses_send.arn
}

# Access keys for the SES sender user
resource "aws_iam_access_key" "ses_sender" {
  user = aws_iam_user.ses_sender.name
}

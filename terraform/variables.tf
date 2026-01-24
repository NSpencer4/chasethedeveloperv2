variable "cloudflare_api_token" {
  description = "Cloudflare API token with Pages permissions"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "project_name" {
  description = "Name of the Cloudflare Pages project"
  type        = string
  default     = "chasethedeveloperv2"
}

variable "github_owner" {
  description = "GitHub repository owner (username or organization)"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
}

variable "contact_email" {
  description = "Email address to receive contact form submissions"
  type        = string
  default     = "chase@thespencers.email"
}

# AWS Configuration
variable "aws_region" {
  description = "AWS region for SES"
  type        = string
  default     = "us-east-1"
}

variable "aws_access_key" {
  description = "AWS access key for Terraform"
  type        = string
  sensitive   = true
}

variable "aws_secret_key" {
  description = "AWS secret key for Terraform"
  type        = string
  sensitive   = true
}

variable "ses_from_email" {
  description = "Verified email address to send from via SES"
  type        = string
  default     = "chase@thespencers.email"
}

output "pages_project_name" {
  description = "The name of the Cloudflare Pages project"
  value       = cloudflare_pages_project.portfolio.name
}

output "pages_project_subdomain" {
  description = "The default subdomain for the Pages project"
  value       = cloudflare_pages_project.portfolio.subdomain
}

output "pages_project_domains" {
  description = "All domains associated with the Pages project"
  value       = cloudflare_pages_project.portfolio.domains
}

output "pages_url" {
  description = "The default URL for the Pages project"
  value       = "https://${cloudflare_pages_project.portfolio.subdomain}"
}

output "ses_sender_email" {
  description = "The verified SES sender email"
  value       = aws_ses_email_identity.sender.email
  default     = "noreply@chasespencer.dev"
}

output "ses_verification_status" {
  description = "SES email verification status (check email to verify)"
  value       = "Verification email sent to ${var.ses_from_email} - click the link to verify"
}

output "rds_hostname" {
  description = "RDS instance hostname"
  value       = aws_db_instance.carisuraustaging.address
  sensitive   = true
}

output "bucket_name" {
  value = aws_s3_bucket.carisuraustagingtfbackend.id
}

output "rds_port" {
  description = "RDS instance port"
  value       = aws_db_instance.carisuraustaging.port
  sensitive   = true
}

output "rds_username" {
  description = "RDS instance root username"
  value       = aws_db_instance.carisuraustaging.username
  sensitive   = true
}
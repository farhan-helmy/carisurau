terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.66.1"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region     = "ap-southeast-1"
  profile    = "mfarhanz"
}

data "aws_availability_zones" "available" {}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.77.0"

  name                 = "carisuraustaging"
  cidr                 = "10.0.0.0/16"
  azs                  = data.aws_availability_zones.available.names
  public_subnets       = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_db_subnet_group" "carisuraustaging" {
  name       = "carisuraustaging"
  subnet_ids = module.vpc.public_subnets

  tags = {
    Name = "carisuraustaging"
  }
}

resource "aws_security_group" "rds" {
  name   = "carisuraustaging_rds"
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "carisuraustaging_rds"
  }
}

resource "aws_db_instance" "carisuraustaging" {
  identifier             = "carisuraustaging"
  instance_class         = "db.t3.micro"
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "15.3"
  username               = "postgres"
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.carisuraustaging.name
  vpc_security_group_ids = [aws_security_group.rds.id]
  parameter_group_name   = aws_db_parameter_group.carisuraustaging.name
  publicly_accessible    = true
  skip_final_snapshot    = true
}

resource "aws_db_parameter_group" "carisuraustaging" {
  name   = "carisuraustaging"
  family = "postgres15"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}
#!/bin/bash

# Create WorkflowConfig DynamoDB table
aws dynamodb create-table \
    --table-name CSIWF_Config \
    --attribute-definitions AttributeName=workflow_config_id,AttributeType=S \
    --key-schema AttributeName=workflow_config_id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --region us-east-1

echo "Table 'CSIWF_Config' created successfully."
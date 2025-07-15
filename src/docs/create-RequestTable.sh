#!/bin/bash

# Create RequestCase DynamoDB table
aws dynamodb create-table \
    --table-name CSIWF_Request \
    --attribute-definitions \
        AttributeName=unique_Request_id,AttributeType=S \
    --key-schema \
        AttributeName=unique_Request_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST

# Wait for table to be active
aws dynamodb wait table-exists --table-name CSIWF_Request

echo "CSIWF_Request table created"
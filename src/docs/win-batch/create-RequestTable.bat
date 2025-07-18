@echo off

REM Create RequestCase DynamoDB table
aws dynamodb create-table ^
    --table-name WorkflowRequest ^
    --attribute-definitions ^
        AttributeName=unique_Request_id,AttributeType=S ^
    --key-schema ^
        AttributeName=unique_Request_id,KeyType=HASH ^
    --billing-mode PAY_PER_REQUEST

REM Wait for table to be active
aws dynamodb wait table-exists --table-name WorkflowRequest


echo RequestCase table created 
:: filepath: create_table.bat
@echo off
aws dynamodb create-table ^
    --table-name WorkflowConfig ^
    --attribute-definitions AttributeName=workflow_config_id,AttributeType=S ^
    --key-schema AttributeName=workflow_config_id,KeyType=HASH ^
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 ^
    --region us-east-1
echo Table "WorkflowConfig" created successfully.
pause
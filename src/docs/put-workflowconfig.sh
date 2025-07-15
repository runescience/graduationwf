#!/bin/bash

WORKFLOW_CONFIG_ID="WKFLCFG0001"
WORKFLOW_NAME="Masters_Graduation_Workflow"
WORKFLOW_APP_ID="WKFL0001"
REVIEWER1="reviewer1"
REVIEWER2="reviewer2"
WF_DEFINITION_ARN="ARN-111-222-678"
FORMLY_CONFIG_BLOB="this is a formly blob3.2"

aws dynamodb put-item \
    --table-name CSIWF_Config \
    --item "{\"workflow_config_id\":{\"S\":\"$WORKFLOW_CONFIG_ID\"},\"workflow_name\":{\"S\":\"$WORKFLOW_NAME\"},\"workflow_app_id\":{\"S\":\"$WORKFLOW_APP_ID\"},\"roles\":{\"SS\":[\"$REVIEWER1\",\"$REVIEWER2\"]},\"wf_definition_arn\":{\"S\":\"$WF_DEFINITION_ARN\"},\"formly_config_blob\":{\"S\":\"$FORMLY_CONFIG_BLOB\"}}" \
    --region us-east-1

echo "Item added to CSIWF_Config table successfully."
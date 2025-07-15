#!/bin/bash

# Insert a dummy WorkflowRequest record into the WorkflowRequest DynamoDB table

# Main record fields
UNIQUE_REQUEST_ID="WFREQ-20250715-003"
CREATED_ON="2025-07-10T12:00:00Z"
CREATED_BY="joel"
MODIFIED_BY="joel"
MODIFIED_ON="2025-07-10T12:00:00Z"
CURRENTLY_OWNED_BY="joel"
WF_EXECUTION_ARN="arn:aws:states:us-east-1:123456789012:execution:WorkflowRequest:IMRX00003345"
TASK_STEP="initial_review"
REQUEST_STATUS="pending"

# Form data fields
CASE_ID="CASE_2025_002"
CASE_START_DATE="2025-07-01T09:00:00Z"
STAGE_START_DATE="2025-07-05T09:00:00Z"
DEGREE_TYPE="Masters"
AWARDS="Research Excellence Award"
PRIORITY="medium"
TIMEFRAME="3 months"
CEREMONY_TYPE="graduation"
MAJOR="Data Science"
DEPARTMENT_CHAIR="Dr. Alice Smith"
CHAIR_NAME="Dr. Alice Smith"
LETTER_OF_RECOMMENDATION="Strong recommendation for graduation"
SUPPORTING_DOC="thesis_final.pdf"

# Workflow config fields
WORKFLOW_NAME="Masters_Graduation_Workflow"
WORKFLOW_CONFIG_ID="WKFLCFG0001"
WORKFLOW_APPID="WKFL0001"
WF_DEFINITION_ARN_CONFIG="arn:aws:states:us-east-1:123456789012:stateMachine:MastersGraduationWorkflow"
FORMLY_CONFIG_BLOB="this is a formly config blob"
VERSION="1.0"

aws dynamodb put-item \
    --table-name WorkflowRequest \
    --item "{\"unique_Request_id\":{\"S\":\"$UNIQUE_REQUEST_ID\"},\"created_on\":{\"S\":\"$CREATED_ON\"},\"created_by\":{\"S\":\"$CREATED_BY\"},\"modified_by\":{\"S\":\"$MODIFIED_BY\"},\"modified_on\":{\"S\":\"$MODIFIED_ON\"},\"currently_owned_by\":{\"S\":\"$CURRENTLY_OWNED_BY\"},\"wf_execution_arn\":{\"S\":\"$WF_EXECUTION_ARN\"},\"task_step\":{\"S\":\"$TASK_STEP\"},\"request_status\":{\"S\":\"$REQUEST_STATUS\"},\"form_data\":{\"M\":{\"case_id\":{\"S\":\"$CASE_ID\"},\"case_start_date\":{\"S\":\"$CASE_START_DATE\"},\"stage_start_date\":{\"S\":\"$STAGE_START_DATE\"},\"degree_type\":{\"S\":\"$DEGREE_TYPE\"},\"awards\":{\"S\":\"$AWARDS\"},\"priority\":{\"S\":\"$PRIORITY\"},\"timeframe\":{\"S\":\"$TIMEFRAME\"},\"ceremony_type\":{\"S\":\"$CEREMONY_TYPE\"},\"major\":{\"S\":\"$MAJOR\"},\"window_quan\":{\"N\":\"1\"},\"window_type\":{\"S\":\"quarter\"},\"department_chair\":{\"S\":\"$DEPARTMENT_CHAIR\"},\"chair_name\":{\"S\":\"$CHAIR_NAME\"},\"letter_of_recommendation\":{\"S\":\"$LETTER_OF_RECOMMENDATION\"},\"supporting_doc\":{\"S\":\"$SUPPORTING_DOC\"}}}},\"workflow_config_blob\":{\"M\":{\"workflow_name\":{\"S\":\"$WORKFLOW_NAME\"},\"workflow_config_id\":{\"S\":\"$WORKFLOW_CONFIG_ID\"},\"workflow_appid\":{\"S\":\"$WORKFLOW_APPID\"},\"wf_definition_arn\":{\"S\":\"$WF_DEFINITION_ARN_CONFIG\"},\"formly_config_blob\":{\"S\":\"$FORMLY_CONFIG_BLOB\"},\"version\":{\"S\":\"$VERSION\"}}}}" \
    --region us-east-1

echo "Dummy WorkflowRequest record $UNIQUE_REQUEST_ID inserted successfully"
#!/bin/bash

WORKFLOW_CONFIG_ID="PROJ0001"
PROJECT_NAME="Graduation"
WORKFLOW_APPID="WKFW0001"
PROJECT_OWNER_NAME="PPProjTeam"
OWNER_DIVISION="Prjdiv"
APP_NAME="GraduationApp"

aws dynamodb put-item \
    --table-name CSIWF_Project \
    --item "{\"workflow_config_id\":{\"S\":\"$WORKFLOW_CONFIG_ID\"},\"project_name\":{\"S\":\"$PROJECT_NAME\"},\"workflow_appid\":{\"S\":\"$WORKFLOW_APPID\"},\"project_owner_name\":{\"S\":\"$PROJECT_OWNER_NAME\"},\"owner_division\":{\"S\":\"$OWNER_DIVISION\"},\"app_name\":{\"S\":\"$APP_NAME\"}}" \
    --region us-east-1

echo "Item added to CSIWF_Project table successfully."
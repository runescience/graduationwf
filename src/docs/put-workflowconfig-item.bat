@echo off
set WORKFLOW_CONFIG_ID=WKFLCFG0001
set WORKFLOW_NAME=Masters_Graduation_Workflow
set WORKFLOW_APP_ID=WKFL0001
set REVIEWER1=reviewer1
set REVIEWER2=reviewer2
set WF_DEFINITION_ARN=ARN-111-222-678
set FORMLY_CONFIG_BLOB=this is a formly blob3

aws dynamodb put-item ^
    --table-name WorkflowConfig ^
    --item "{\"workflow_config_id\":{\"S\":\"%WORKFLOW_CONFIG_ID%\"},\"workflow_name\":{\"S\":\"%WORKFLOW_NAME%\"},\"workflow_app_id\":{\"S\":\"%WORKFLOW_APP_ID%\"},\"roles\":{\"SS\":[\"%REVIEWER1%\",\"%REVIEWER2%\"]},\"wf_definition_arn\":{\"S\":\"%WF_DEFINITION_ARN%\"},\"formly_config_blob\":{\"S\":\"%FORMLY_CONFIG_BLOB%\"}}" ^
    --region us-east-1
echo Item added to WorkflowConfig table successfully.
pause
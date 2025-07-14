@echo off
REM Insert a dummy WorkflowRequest record into the WorkflowRequest DynamoDB table

REM Main record fields. NOTE: unique requestID maybe duplicating CASE_ID
set UNIQUE_REQUEST_ID=WFREQ-20250724-002
set CREATED_ON=2025-07-10T12:00:00Z
set CREATED_BY=joel
set MODIFIED_BY=joel
set MODIFIED_ON=2025-07-10T12:00:00Z
set CURRENTLY_OWNED_BY=joel
set WF_EXECUTION_ARN=arn:aws:states:us-east-1:123456789012:execution:WorkflowRequest:IMRX00003345
set TASK_STEP=initial_review
set REQUEST_STATUS=pending

REM Form data fields
set CASE_ID=CASE_2025_002
set CASE_START_DATE=2025-07-01T09:00:00Z
set STAGE_START_DATE=2025-07-05T09:00:00Z
set DEGREE_TYPE=Masters
set AWARDS=Research Excellence Award
set PRIORITY=medium
set TIMEFRAME=3 months
set CEREMONY_TYPE=graduation
set MAJOR=Data Science
set DEPARTMENT_CHAIR=Dr. Alice Smith
set CHAIR_NAME=Dr. Alice Smith
set LETTER_OF_RECOMMENDATION=Strong recommendation for graduation
set SUPPORTING_DOC=thesis_final.pdf

REM Workflow config fields
set WORKFLOW_NAME=Masters_Graduation_Workflow
set WORKFLOW_CONFIG_ID=WKFLCFG0001
set WORKFLOW_APPID=WKFL0001
set WF_DEFINITION_ARN_CONFIG=arn:aws:states:us-east-1:123456789012:stateMachine:MastersGraduationWorkflow
set FORMLY_CONFIG_BLOB=this is a formly config blob
set VERSION=1.0

aws dynamodb put-item ^
    --table-name WorkflowRequest ^
    --item "{\"unique_Request_id\":{\"S\":\"%UNIQUE_REQUEST_ID%\"},\"created_on\":{\"S\":\"%CREATED_ON%\"},\"created_by\":{\"S\":\"%CREATED_BY%\"},\"modified_by\":{\"S\":\"%MODIFIED_BY%\"},\"modified_on\":{\"S\":\"%MODIFIED_ON%\"},\"currently_owned_by\":{\"S\":\"%CURRENTLY_OWNED_BY%\"},\"wf_execution_arn\":{\"S\":\"%WF_EXECUTION_ARN%\"},\"task_step\":{\"S\":\"%TASK_STEP%\"},\"request_status\":{\"S\":\"%REQUEST_STATUS%\"},\"form_data\":{\"M\":{\"case_id\":{\"S\":\"%CASE_ID%\"},\"case_start_date\":{\"S\":\"%CASE_START_DATE%\"},\"stage_start_date\":{\"S\":\"%STAGE_START_DATE%\"},\"degree_type\":{\"S\":\"%DEGREE_TYPE%\"},\"awards\":{\"S\":\"%AWARDS%\"},\"priority\":{\"S\":\"%PRIORITY%\"},\"timeframe\":{\"S\":\"%TIMEFRAME%\"},\"ceremony_type\":{\"S\":\"%CEREMONY_TYPE%\"},\"major\":{\"S\":\"%MAJOR%\"},\"window_quan\":{\"N\":\"1\"},\"window_type\":{\"S\":\"quarter\"},\"department_chair\":{\"S\":\"%DEPARTMENT_CHAIR%\"},\"pocs\":{\"L\":[{\"S\":\"advisor@university.edu\"},{\"S\":\"registrar@university.edu\"}]},\"additl_pocs\":{\"L\":[{\"S\":\"dean@university.edu\"}]},\"tags\":{\"L\":[{\"S\":\"urgent\"},{\"S\":\"masters\"}]},\"chair_name\":{\"S\":\"%CHAIR_NAME%\"},\"letter_of_recommendation\":{\"S\":\"%LETTER_OF_RECOMMENDATION%\"},\"supporting_doc\":{\"S\":\"%SUPPORTING_DOC%\"},\"student_documents\":{\"L\":[{\"S\":\"transcript.pdf\"},{\"S\":\"thesis.pdf\"}]},\"papers_list\":{\"L\":[{\"M\":{\"paper\":{\"S\":\"Data Science in Healthcare\"},\"association\":{\"S\":\"ACM Conference\"},\"priority_level\":{\"S\":\"high\"},\"supporting_doc\":{\"S\":\"paper_ds_healthcare.pdf\"}}}]},\"research_list\":{\"L\":[{\"M\":{\"research\":{\"S\":\"AI in Medicine\"},\"supporting_doc\":{\"S\":\"research_ai_medicine.pdf\"}}}]},\"ta_list\":{\"L\":[{\"S\":\"DS101 - Spring 2025\"},{\"S\":\"DS201 - Summer 2025\"}]},\"supply_list\":{\"L\":[{\"S\":\"Lab Equipment\"},{\"S\":\"Research Materials\"}]},\"milestone_list\":{\"L\":[{\"M\":{\"items\":{\"S\":\"Thesis Submission\"},\"details\":{\"S\":\"Submitted final thesis\"},\"achieved\":{\"BOOL\":true}}},{\"M\":{\"items\":{\"S\":\"Publication\"},\"details\":{\"S\":\"Paper accepted to ACM conference\"},\"achieved\":{\"BOOL\":true}}}]}}},\"workflow_config_blob\":{\"M\":{\"workflow_name\":{\"S\":\"%WORKFLOW_NAME%\"},\"workflow_config_id\":{\"S\":\"%WORKFLOW_CONFIG_ID%\"},\"workflow_appid\":{\"S\":\"%WORKFLOW_APPID%\"},\"wf_definition_arn\":{\"S\":\"%WF_DEFINITION_ARN_CONFIG%\"},\"roles\":{\"L\":[{\"S\":\"advisor\"},{\"S\":\"registrar\"},{\"S\":\"dean\"}]},\"formly_config_blob\":{\"S\":\"%FORMLY_CONFIG_BLOB%\"},\"version\":{\"S\":\"%VERSION%\"}}}}" ^
    --region us-east-1

echo Dummy WorkflowRequest record %UNIQUE_REQUEST_ID% inserted successfully
pause
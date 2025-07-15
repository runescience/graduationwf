@echo off
set WORKFLOW_CONFIG_ID=PROJ0001
set PROJECT_NAME=Graduation
set WORKFLOW_APPID=WKFW0001
set PROJECT_OWNER_NAME=PPProjTeam
set OWNER_DIVISION=Prjdiv
set APP_NAME=GraduationApp

aws dynamodb put-item ^
    --table-name WFProject ^
    --item "{\"workflow_config_id\":{\"S\":\"%WORKFLOW_CONFIG_ID%\"},\"project_name\":{\"S\":\"%PROJECT_NAME%\"},\"workflow_appid\":{\"S\":\"%WORKFLOW_APPID%\"},\"project_owner_name\":{\"S\":\"%PROJECT_OWNER_NAME%\"},\"owner_division\":{\"S\":\"%OWNER_DIVISION%\"},\"app_name\":{\"S\":\"%APP_NAME%\"}}" ^
    --region us-east-1
echo Item added to WFProject table successfully.
pause
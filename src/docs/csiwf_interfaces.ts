interface Project {
    project_name: string;
    workflow_appid: string;
    project_owner_name: string;
    owner_division: string;
    app_name: string;
    created_on: Date;
    created_by: string;
    modified_by: string;
    modified_on: Date;
}
    
interface WorkflowConfig {
    workflow_name: string;      // (ie: "PhD Degree Workflow")
    workflow_config_id: string; //unique identifier for the workflow config
    workflow_appid: string;     //from project_blob table
    wf_definition_arn: string;  //ARN of the workflow definition in AWS Step Functions
    roles: string[];
    formly_config_blob: string; //JSON string of the formly config
    version: string;
    created_on: Date;
    created_by: string;
    modified_by: string;
    modified_on: Date;
}

interface Roles {
    created_on: Date;
    created_by: string;
    modified_by: string;
    modified_on: Date;
    currently_owned_by: string;

    role_name: string;       
    role_description: string; 
    role_id: string;     
    entitlement: string; 
    
}

interface WorkflowRequest {
    created_on: Date;
    created_by: string;
    modified_by: string;
    modified_on: Date;
    currently_owned_by: string;
    unique_Request_id: string;
    wf_execution_arn: string;   //ARN of the workflow execution in AWS Step Functions
    task_step: string;          //(task: rviewr1, rviewr2, etc.)
    request_status: string;     //(ie: pending, withdrawn)
    form_data: FormData;        //JSON  of the form data
    workflow_config_blob: WorkflowConfig;    //Blobs dont change. 
}
    
interface FormData {
    case_id: string;
    case_start_date: Date;
    stage_start_date: Date;
    degree_type: string;
    awards: string;
    priority: string;
    timeframe: string;
    ceremony_type: string;
    major: string;
    window_quan: number;
    window_type: string;
    department_chair: string;
    pocs: string[];
    additl_pocs: string[];
    tags: string[];
    chair_name: string;
    letter_of_recommendation: string;
    supporting_doc: string;
    student_documents: string[];
    papers_list: PapersList[];
    research_list: ResearchList[];
    ta_list: string[];
    supply_list: string[];
    milestone_list: MilestoneList[];
    created_on: Date;
    created_by: string;
    modified_by: string;
    modified_on: Date;
}

interface PapersList {
    paper: string;
    association: string;
    priority_level: string;
    supporting_doc: string;
}

interface ResearchList {
    research: string;
    supporting_doc: string;
}

interface MilestoneList {
    items: string;
    details: string;
    achieved: boolean;
}
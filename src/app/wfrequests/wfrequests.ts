
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

interface FormData {
  case_id: string;
  case_start_date: string;
  stage_start_date: string;
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
  created_on: string;
  created_by: string;
  modified_by: string;
  modified_on: string;
}

interface WorkflowConfig {
  workflow_name: string;
  workflow_config_id: string;
  workflow_appid: string;
  wf_definition_arn: string;
  roles: string[];
  formly_config_blob: string;
  version: string;
  created_on: string;
  created_by: string;
  modified_by: string;
  modified_on: string;
}

interface WorkflowRequest {
  created_on: string;
  created_by: string;
  modified_by: string;
  modified_on: string;
  currently_owned_by: string;
  unique_Request_id: string;
  wf_execution_arn: string;
  task_step: string;
  request_status: string;
  form_data: FormData;
  workflow_config_blob: WorkflowConfig;
}

@Component({
  selector: 'app-wfrequests',
  imports: [CommonModule, FormsModule],
  templateUrl: './wfrequests.html',
  styleUrl: './wfrequests.css'
})
export class Wfrequests {
  wfrequests: WorkflowRequest[] = [
    {
      created_on: '2024-01-15T10:00:00Z',
      created_by: 'john.doe',
      modified_by: 'john.doe',
      modified_on: '2024-01-15T10:00:00Z',
      currently_owned_by: 'john.doe',
      unique_Request_id: 'WFREQ-2024-001',
      wf_execution_arn: 'arn:aws:states:us-east-1:123456789012:execution:WorkflowRequest:WFREQ-2024-001',
      task_step: 'initial_review',
      request_status: 'pending',
      form_data: {
        case_id: 'CASE-2024-001',
        case_start_date: '2024-01-15T09:00:00Z',
        stage_start_date: '2024-01-15T09:00:00Z',
        degree_type: 'PhD',
        awards: 'Academic Excellence Award',
        priority: 'high',
        timeframe: '6 months',
        ceremony_type: 'graduation',
        major: 'Computer Science',
        window_quan: 2,
        window_type: 'semester',
        department_chair: 'Dr. Smith',
        pocs: ['poc1@example.com'],
        additl_pocs: ['poc2@example.com'],
        tags: ['urgent', 'research'],
        chair_name: 'Dr. Smith',
        letter_of_recommendation: 'Excellent student with outstanding research contributions.',
        supporting_doc: 'thesis_document.pdf',
        student_documents: ['transcript.pdf', 'research_papers.pdf'],
        papers_list: [],
        research_list: [],
        ta_list: [],
        supply_list: [],
        milestone_list: [],
        created_on: '2024-01-15T10:00:00Z',
        created_by: 'john.doe',
        modified_by: 'john.doe',
        modified_on: '2024-01-15T10:00:00Z'
      },
      workflow_config_blob: {
        workflow_name: 'PhD Graduation Workflow',
        workflow_config_id: 'WFCFG-001',
        workflow_appid: 'WFAPP-001',
        wf_definition_arn: 'arn:aws:states:us-east-1:123456789012:stateMachine:PhDGraduationWorkflow',
        roles: ['student', 'advisor', 'committee'],
        formly_config_blob: '{"fields": [{"key": "student_name", "type": "input"}]}',
        version: '1.0',
        created_on: '2024-01-01T00:00:00Z',
        created_by: 'system',
        modified_by: 'system',
        modified_on: '2024-01-01T00:00:00Z'
      }
    }
  ];

  wfrequest: WorkflowRequest = {
    created_on: '',
    created_by: '',
    modified_by: '',
    modified_on: '',
    currently_owned_by: '',
    unique_Request_id: '',
    wf_execution_arn: '',
    task_step: '',
    request_status: '',
    form_data: {
      case_id: '',
      case_start_date: '',
      stage_start_date: '',
      degree_type: '',
      awards: '',
      priority: '',
      timeframe: '',
      ceremony_type: '',
      major: '',
      window_quan: 0,
      window_type: '',
      department_chair: '',
      pocs: [],
      additl_pocs: [],
      tags: [],
      chair_name: '',
      letter_of_recommendation: '',
      supporting_doc: '',
      student_documents: [],
      papers_list: [],
      research_list: [],
      ta_list: [],
      supply_list: [],
      milestone_list: [],
      created_on: '',
      created_by: '',
      modified_by: '',
      modified_on: ''
    },
    workflow_config_blob: {
      workflow_name: '',
      workflow_config_id: '',
      workflow_appid: '',
      wf_definition_arn: '',
      roles: [],
      formly_config_blob: '',
      version: '',
      created_on: '',
      created_by: '',
      modified_by: '',
      modified_on: ''
    }
  };

  selectedRequestIndex = -1;
  isEditing = false;

  selectRequest(index: number) {
    this.selectedRequestIndex = index;
  }

  newRequest() {
    this.wfrequest = {
      created_on: '',
      created_by: '',
      modified_by: '',
      modified_on: '',
      currently_owned_by: '',
      unique_Request_id: '',
      wf_execution_arn: '',
      task_step: '',
      request_status: '',
      form_data: {
        case_id: '',
        case_start_date: '',
        stage_start_date: '',
        degree_type: '',
        awards: '',
        priority: '',
        timeframe: '',
        ceremony_type: '',
        major: '',
        window_quan: 0,
        window_type: '',
        department_chair: '',
        pocs: [],
        additl_pocs: [],
        tags: [],
        chair_name: '',
        letter_of_recommendation: '',
        supporting_doc: '',
        student_documents: [],
        papers_list: [],
        research_list: [],
        ta_list: [],
        supply_list: [],
        milestone_list: [],
        created_on: '',
        created_by: '',
        modified_by: '',
        modified_on: ''
      },
      workflow_config_blob: {
        workflow_name: '',
        workflow_config_id: '',
        workflow_appid: '',
        wf_definition_arn: '',
        roles: [],
        formly_config_blob: '',
        version: '',
        created_on: '',
        created_by: '',
        modified_by: '',
        modified_on: ''
      }
    };
    this.selectedRequestIndex = -1;
    this.isEditing = false;
  }

  editRequest() {
    if (this.selectedRequestIndex !== -1) {
      this.wfrequest = JSON.parse(JSON.stringify(this.wfrequests[this.selectedRequestIndex]));
      this.isEditing = true;
    }
  }

  deleteRequest() {
    if (this.selectedRequestIndex !== -1) {
      const requestId = this.wfrequests[this.selectedRequestIndex].unique_Request_id;
      if (confirm(`Are you sure you want to delete request "${requestId}"?`)) {
        this.wfrequests.splice(this.selectedRequestIndex, 1);
        this.newRequest(); // Reset form
        console.log('Workflow request deleted successfully');
      }
    }
  }

  onSubmit() {
    // Set timestamps
    const now = new Date().toISOString();
    
    if (this.isEditing && this.selectedRequestIndex !== -1) {
      // Update existing request
      this.wfrequest.modified_on = now;
      this.wfrequest.form_data.modified_on = now;
      this.wfrequests[this.selectedRequestIndex] = JSON.parse(JSON.stringify(this.wfrequest));
      console.log('Workflow request updated:', this.wfrequest);
      this.isEditing = false;
    } else {
      // Create new request
      this.wfrequest.created_on = now;
      this.wfrequest.modified_on = now;
      this.wfrequest.form_data.created_on = now;
      this.wfrequest.form_data.modified_on = now;
      this.wfrequests.push(JSON.parse(JSON.stringify(this.wfrequest)));
      console.log('New workflow request created:', this.wfrequest);
      this.newRequest(); // Reset form
    }
  }
}

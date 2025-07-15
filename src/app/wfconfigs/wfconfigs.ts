
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface WfConfig {
  workflow_config_id: string;
  project_name: string;
  workflow_name: string;
  workflow_description: string;
  workflow_version: string;
  workflow_status: string;
}

@Component({
  selector: 'app-wfconfigs',
  imports: [FormsModule, CommonModule],
  templateUrl: './wfconfigs.html',
  styleUrl: './wfconfigs.css'
})
export class Wfconfigs {
  wfconfigs: WfConfig[] = [
    {
      workflow_config_id: 'WFCFG0001',
      project_name: 'Sample Project 1',
      workflow_name: 'Data Processing Workflow',
      workflow_description: 'Processes incoming data files and validates content',
      workflow_version: '1.0.0',
      workflow_status: 'Active'
    },
    {
      workflow_config_id: 'WFCFG0002',
      project_name: 'Sample Project 2',
      workflow_name: 'Report Generation Workflow',
      workflow_description: 'Generates monthly reports and sends notifications',
      workflow_version: '2.1.0',
      workflow_status: 'Active'
    }
  ];

  wfconfig: WfConfig = {
    workflow_config_id: '',
    project_name: '',
    workflow_name: '',
    workflow_description: '',
    workflow_version: '',
    workflow_status: ''
  };

  selectedConfigIndex: number = -1;
  isEditing: boolean = false;

  selectConfig(index: number) {
    this.selectedConfigIndex = index;
    this.wfconfig = { ...this.wfconfigs[index] };
    this.isEditing = false;
  }

  newConfig() {
    this.wfconfig = {
      workflow_config_id: '',
      project_name: '',
      workflow_name: '',
      workflow_description: '',
      workflow_version: '',
      workflow_status: ''
    };
    this.selectedConfigIndex = -1;
    this.isEditing = false;
  }

  editConfig() {
    if (this.selectedConfigIndex !== -1) {
      this.wfconfig = { ...this.wfconfigs[this.selectedConfigIndex] };
      this.isEditing = true;
    }
  }

  deleteConfig() {
    if (this.selectedConfigIndex !== -1) {
      const configName = this.wfconfigs[this.selectedConfigIndex].project_name;
      if (confirm(`Are you sure you want to delete "${configName}"?`)) {
        this.wfconfigs.splice(this.selectedConfigIndex, 1);
        this.newConfig(); // Reset form
        console.log('Workflow configuration deleted successfully');
      }
    }
  }

  onSubmit() {
    if (this.isEditing && this.selectedConfigIndex !== -1) {
      // Update existing configuration
      this.wfconfigs[this.selectedConfigIndex] = { ...this.wfconfig };
      console.log('Workflow configuration updated:', this.wfconfig);
      this.isEditing = false;
    } else {
      // Create new configuration
      this.wfconfigs.push({ ...this.wfconfig });
      console.log('New workflow configuration created:', this.wfconfig);
      this.newConfig(); // Reset form
    }
  }
}

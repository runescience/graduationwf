
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Project {
  project_name: string;
  workflow_appid: string;
  project_owner_name: string;
  owner_division: string;
  app_name: string;
}

@Component({
  selector: 'app-projects',
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      project_name: 'Sample Project 1',
      workflow_appid: 'WKFW0001',
      project_owner_name: 'John Doe',
      owner_division: 'Engineering',
      app_name: 'SampleApp1'
    },
    {
      project_name: 'Sample Project 2',
      workflow_appid: 'WKFW0002',
      project_owner_name: 'Jane Smith',
      owner_division: 'Marketing',
      app_name: 'SampleApp2'
    }
  ];

  project: Project = {
    project_name: '',
    workflow_appid: '',
    project_owner_name: '',
    owner_division: '',
    app_name: ''
  };

  selectedProjectIndex: number = -1;
  isEditing: boolean = false;

  selectProject(index: number) {
    this.selectedProjectIndex = index;
    this.project = { ...this.projects[index] };
    this.isEditing = false;
  }

  newProject() {
    this.project = {
      project_name: '',
      workflow_appid: '',
      project_owner_name: '',
      owner_division: '',
      app_name: ''
    };
    this.selectedProjectIndex = -1;
    this.isEditing = false;
  }

  editProject() {
    if (this.selectedProjectIndex !== -1) {
      this.project = { ...this.projects[this.selectedProjectIndex] };
      this.isEditing = true;
    }
  }

  deleteProject() {
    if (this.selectedProjectIndex !== -1) {
      const projectName = this.projects[this.selectedProjectIndex].project_name;
      if (confirm(`Are you sure you want to delete "${projectName}"?`)) {
        this.projects.splice(this.selectedProjectIndex, 1);
        this.newProject(); // Reset form
        console.log('Project deleted successfully');
      }
    }
  }

  onSubmit() {
    if (this.isEditing && this.selectedProjectIndex !== -1) {
      // Update existing project
      this.projects[this.selectedProjectIndex] = { ...this.project };
      console.log('Project updated:', this.project);
      this.isEditing = false;
    } else {
      // Create new project
      this.projects.push({ ...this.project });
      console.log('New project created:', this.project);
      this.newProject(); // Reset form
    }
  }
}

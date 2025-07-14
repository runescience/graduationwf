import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Project {
  project_name: string;
  workflow_appid: string;
  project_owner_name: string;
  owner_division: string;
  app_name: string;
}

@Component({
  selector: 'app-projects',
  imports: [FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  project: Project = {
    project_name: '',
    workflow_appid: '',
    project_owner_name: '',
    owner_division: '',
    app_name: ''
  };

  onSubmit() {
    console.log('Project data:', this.project);
  }
}

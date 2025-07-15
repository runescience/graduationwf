import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Wfconfigs } from './wfconfigs/wfconfigs';
import { Wfrequests } from './wfrequests/wfrequests';

export const routes: Routes = [
  { path: 'projects', component: Projects },
  { path: 'wfconfigs', component: Wfconfigs },
  { path: 'wfrequests', component: Wfrequests },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

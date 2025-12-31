import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FindTutorDashboard } from './find-tutor/find-tutor-dashboard';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'find-tutor', component: FindTutorDashboard },
];


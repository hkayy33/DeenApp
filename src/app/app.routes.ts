import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FindTutorDashboard } from './find-tutor/find-tutor-dashboard';
import { TutorProfile } from './find-tutor/tutor-profile/tutor-profile/tutor-profile';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'find-tutor', component: FindTutorDashboard },
  { path: 'tutor-profile', component: TutorProfile },
];


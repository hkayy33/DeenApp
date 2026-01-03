import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FindTutorDashboard } from './find-tutor/find-tutor-dashboard';
import { TutorProfile } from './find-tutor/tutor-profile/tutor-profile/tutor-profile';
import { TutorAccountDashboard } from './tutor-account/tutor-account-dashboard/tutor-account-dashboard';
import { TutorSignup } from './account-access/tutor-signup/tutor-signup/tutor-signup';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'find-tutor', component: FindTutorDashboard },
  { path: 'tutor-profile', component: TutorProfile },
  { path: 'tutor-dashboard', component: TutorAccountDashboard },
  { path: 'tutor-signup', component: TutorSignup },
];


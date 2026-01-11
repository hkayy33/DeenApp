import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FindTutorDashboard } from './find-tutor/find-tutor-dashboard';
import { TutorProfile } from './find-tutor/tutor-profile/tutor-profile/tutor-profile';
import { TutorAccountDashboard } from './tutor-account/tutor-account-dashboard/tutor-account-dashboard';
import { TutorSignup } from './account-access/tutor-signup/tutor-signup/tutor-signup';
import { TutorDashboard } from './tutor-dashboard/tutor-dashboard';
import { TutorLogin } from './account-access/tutor-login/tutor-login';
import { Login } from './account-access/login/login';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'find-tutor', component: FindTutorDashboard },
  { path: 'tutor-profile', component: TutorProfile },
  { path: 'become-tutor', component: TutorAccountDashboard },
  { path: 'tutor-signup', component: TutorSignup },
  { path: 'tutor-dashboard', component: TutorDashboard },
  { path: 'tutor-login', component: TutorLogin }
  //{path: 'login', component: Login}
];


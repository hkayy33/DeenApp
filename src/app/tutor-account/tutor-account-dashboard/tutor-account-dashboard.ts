import { Component } from '@angular/core';
import { PageContentSection } from '../../shared/page-content-section/page-content-section/page-content-section';
import { RouterLink } from '@angular/router';
import { TutorService } from '../../domain/services/tutor/signup.service';
import { TutorProfileUpdateRequest } from '../../domain/models/tutor-profile-update.model';
import { TutorProfile } from '../../find-tutor/tutor-profile/tutor-profile/tutor-profile';

@Component({
  selector: 'app-tutor-account-dashboard',
  imports: [PageContentSection, RouterLink],
  standalone: true,
  templateUrl: './tutor-account-dashboard.html',
  styleUrl: './tutor-account-dashboard.scss',
})
export class TutorAccountDashboard {

  constructor(private tutorService: TutorService){}
  // payload : TutorProfileUpdateRequest;

}
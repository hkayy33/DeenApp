import { Component } from '@angular/core';
import { PageContentSection } from '../../shared/page-content-section/page-content-section/page-content-section';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutor-account-dashboard',
  imports: [PageContentSection, RouterLink],
  standalone: true,
  templateUrl: './tutor-account-dashboard.html',
  styleUrl: './tutor-account-dashboard.scss',
})
export class TutorAccountDashboard {

}

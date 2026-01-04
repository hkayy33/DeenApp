import { Component } from '@angular/core';
import { PageContentSection } from '../shared/page-content-section/page-content-section/page-content-section';
import { TutorProfile } from '../find-tutor/tutor-profile/tutor-profile/tutor-profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-dashboard',
  imports: [PageContentSection, TutorProfile, CommonModule],
  standalone: true,
  templateUrl: './tutor-dashboard.html',
  styleUrl: './tutor-dashboard.scss',
})
export class TutorDashboard {

  status='under-review';
  statusText='';
  statusClass = '';

ngOnInit(){
  this.getStatus();
}

getStatus() {
  switch (this.status) {
    case 'under-review':
      this.statusText = 'Under review';
      this.statusClass = 'amber';
      break;

    case 'active':
      this.statusText = 'Active';
      this.statusClass = 'green';
      break;

    case 'new account':
      this.statusText = 'Fill out details';
      this.statusClass = 'grey';
      break;

    case 'inactive':
      this.statusText = 'Inactive';
      this.statusClass = 'red';
      break;
  }
}


  tutorAccount = true;

  profileTabSelected = true;
  studentDashSelected = false;
  
  openProfile() {
    this.profileTabSelected = true;
    this.studentDashSelected = false; // Add this
  }
  
  openStudentDash() {
    this.profileTabSelected = false; // Add this
    this.studentDashSelected = true;
  }




}

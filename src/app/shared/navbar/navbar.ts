import { Component, Input } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TutorDashboard } from '../../tutor-dashboard/tutor-dashboard';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule,],  
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {

  tutorAccount = true;

  constructor(library: FaIconLibrary) {
    library.addIcons(faBell, faUser);  
  }
}

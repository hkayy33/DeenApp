import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';

import { FindTutorDashboard } from './find-tutor/find-tutor-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Footer, Navbar, FindTutorDashboard],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('deencentre-App');
}

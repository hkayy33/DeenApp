import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Footer, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('deencentre-App');
}

import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Carousel, RouterOutlet],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}

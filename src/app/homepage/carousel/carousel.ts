import { Component } from '@angular/core';
import { CarouselCardGroup } from './carousel-card-group/carousel-card-group';


@Component({
  selector: 'app-carousel',
  imports: [CarouselCardGroup],
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {

}

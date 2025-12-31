import { Component } from '@angular/core';
import { CarouselCard } from '../carousel-card/carousel-card';

@Component({
  selector: 'app-carousel-card-group',
  imports: [CarouselCard],
  standalone: true,
  templateUrl: './carousel-card-group.html',
  styleUrl: './carousel-card-group.scss',
})
export class CarouselCardGroup {

  cards = [
    {
      title: '',
      imageURL: '',
      description: '',
      buttonText: '',
    },
    {
      title: '',
      imageURL: '',
      description: '',
      buttonText: '',
    },
    {
      title: '',
      imageURL: '',
      description: '',
      buttonText: '',
    },

  ]

}

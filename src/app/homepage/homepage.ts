import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { RouterOutlet } from '@angular/router';
import { CarouselCardGroup } from './carousel/carousel-card-group/carousel-card-group';
import { PageContainer } from '../shared/page-container/page-container';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Carousel, RouterOutlet, CarouselCardGroup,PageContainer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}

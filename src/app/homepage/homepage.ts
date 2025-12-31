import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselCardGroup } from './carousel/carousel-card-group/carousel-card-group';
import { PageContainer } from '../shared/page-container/page-container';
import { PageContentSection } from '../shared/page-content-section/page-content-section/page-content-section';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Carousel, RouterOutlet, CarouselCardGroup,PageContainer, PageContentSection,RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}

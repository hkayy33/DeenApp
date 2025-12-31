import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.scss',
})
export class CarouselCard {

  @Input() number = '';
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() description = '';
  @Input() buttonText = '';
  @Input() showButton = false;

}

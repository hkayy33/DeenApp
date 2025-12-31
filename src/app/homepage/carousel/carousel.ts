import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselCard } from './carousel-card/carousel-card';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselCard],
  standalone: true,
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
})
export class Carousel {

  // cards = [
  //   {
  //     title: 'Card One',
  //     imageUrl: '',
  //     description: 'Description one',
  //     buttonText: 'Hello',
  //   },
  //   {
  //     title: 'Card Two',
  //     imageUrl: '',
  //     description: 'Description two',
  //     buttonText: 'More',
  //   },
  //   {
  //     title: 'Card Three',
  //     imageUrl: '',
  //     description: 'Description three',
  //     buttonText: 'Go',
  //   },
  // ];

  // activeIndex = 1; // start centered on 2nd card

  // prev() {
  //   this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
  // }

  // next() {
  //   this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  // }

  // // used for class binding
  // isActive(i: number) {
  //   return i === this.activeIndex;
  // }

}

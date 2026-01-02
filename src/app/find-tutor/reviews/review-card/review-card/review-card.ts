import { Component, Input } from '@angular/core';
import { Review as ReviewModel } from '../../../../domain/models/review.model';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.html',
  standalone: true,
  styleUrl: './review-card.scss',
})
export class ReviewCard {

  @Input() review!: ReviewModel;


}

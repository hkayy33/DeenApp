import { Component, Input } from '@angular/core';
import { ReviewCard } from '../../review-card/review-card/review-card';
import { Review as ReviewModel } from '../../../../domain/models/review.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-review-list',
  imports: [ReviewCard, CommonModule],
  templateUrl: './review-list.html',
  standalone: true,
  styleUrl: './review-list.scss',
})
export class ReviewList {
  @Input() reviews: ReviewModel[] = [];

}

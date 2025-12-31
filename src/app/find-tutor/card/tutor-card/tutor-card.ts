import { Component, Input } from '@angular/core';
import { TutorCard as TutorCardModel } from '../../../domain/models/tutor-card.model';

@Component({
  selector: 'app-tutor-card',
  imports: [],
  templateUrl: './tutor-card.html',
  styleUrl: './tutor-card.scss',
})
export class TutorCard {
  @Input() tutor!: TutorCardModel;
}

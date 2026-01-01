import { Component, Input } from '@angular/core';
import { TutorCard as TutorCardModel } from '../../../domain/models/tutor-card.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutor-card',
  imports: [RouterLink],
  templateUrl: './tutor-card.html',
  styleUrl: './tutor-card.scss',
})
export class TutorCard {
  @Input() tutor!: TutorCardModel;
}

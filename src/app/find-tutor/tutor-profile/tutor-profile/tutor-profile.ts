import { Component } from '@angular/core';
import { PageContentSection } from '../../../shared/page-content-section/page-content-section/page-content-section';
import { MediaCarousel } from '../media-carousel/media-carousel/media-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-profile',
  imports: [PageContentSection, MediaCarousel,CommonModule],
  standalone:true,
  templateUrl: './tutor-profile.html',
  styleUrl: './tutor-profile.scss',
})
export class TutorProfile {
  showCarousel = false;

}

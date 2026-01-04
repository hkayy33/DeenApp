import { Component, Input } from '@angular/core';
import { PageContentSection } from '../../../shared/page-content-section/page-content-section/page-content-section';
import { MediaCarousel } from '../media-carousel/media-carousel/media-carousel';
import { CommonModule } from '@angular/common';
import { TutorProfile as TutorProfileModel } from '../../../domain/models/tutor-profile.model';
import { ReviewList } from '../../reviews/review-list/review-list/review-list';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountryDropDown } from '../../../drop-downs/country-drop-down/country-drop-down';

@Component({
  selector: 'app-tutor-profile',
  imports: [PageContentSection, MediaCarousel, CommonModule, ReviewList, RouterLink, FormsModule, CountryDropDown],
  standalone: true,
  templateUrl: './tutor-profile.html',
  styleUrl: './tutor-profile.scss',
})
export class TutorProfile {
  showCarousel = false;

  @Input() tutorAccount = false;

  subjects: string [] = [];

  subject='';
  isHovering= false;
  hoveredIndex: number | null = null;

  searchTerm = '';



  

  addSubject(){


    if(!this.subjects.includes(this.subject) && this.subject != ''){
      this.subjects.push(this.subject.trim());
    }
    else{
          alert('Already added subject');
    }
  }

  removeSubject(index: number){
    this.subjects.splice(index, 1);
  }


toggleCarousel() {
  this.showCarousel = !this.showCarousel;
}

bookSession() {
  // Your booking logic here
  console.log('Booking session with', this.tutor.name);
}

  @Input() tutor!: TutorProfileModel;

  ngOnInit(): void {
    this.tutor = {
      id: 1,
      name: 'Ahmed Khan',
      subjects: [
          'Quran',
          'Tajweed',
          'Arabic',
          'Fiqh',
          'Hadith',
          'Aqeedah'
      ],
      imageUrl: 'https://via.placeholder.com/150',
      headline: 'Experienced Quran & Arabic Tutor specialing in dnsuobisfbisf fsbisfbifsi fisfb',
      price: 3,
      likes: 124,

      rating: {
        average: 4.8,
        count: 36,
      },

      reviews: [
        {
          id: 1,
          reviewerName: 'Sarah',
          comment: 'Excellent teacher, very patient.',
          rating: 5,
          createdAt: '2024-10-12',
        },
        {
          id: 2,
          reviewerName: 'Yusuf',
          comment: 'Highly recommend.',
          rating: 4,
          createdAt: '2024-09-01',
        },
        {
          id: 2,
          reviewerName: 'Yusuf',
          comment: 'Highly recommend.',
          rating: 4,
          createdAt: '2024-09-01',
        },
      ],

      location: {
        country: 'United Kingdom',
        city: 'London',
      },

      aboutMe:
        'I have over 10 years of experience teaching Quran, Tajweed, and Arabic to students of all ages.',

      mediaList: [
        'https://example.com/video1.mp4',
        'https://example.com/video2.mp4',
        'https://example.com/image1.jpg',
      ],

      contactInfo: {
        phoneNumber: '+44 7700 900123',
        email: 'ahmed.khan@example.com',
      },
    };

    
  }

}

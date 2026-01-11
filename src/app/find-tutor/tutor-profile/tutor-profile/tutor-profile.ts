import { Component, inject, Input, OnInit } from '@angular/core';
import { PageContentSection } from '../../../shared/page-content-section/page-content-section/page-content-section';
import { MediaCarousel } from '../media-carousel/media-carousel/media-carousel';
import { CommonModule } from '@angular/common';
import { TutorProfile as TutorProfileModel } from '../../../domain/models/tutor-profile.model';
import { ReviewList } from '../../reviews/review-list/review-list/review-list';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountryDropDown } from '../../../drop-downs/country-drop-down/country-drop-down';

import { TutorProfileUpdateRequest } from '../../../domain/models/tutor-profile-update.model';
import { TutorService } from '../../../domain/services/tutor/signup.service';
import { BaseTutor } from '../../../domain/models/base-tutor.model';


@Component({
  selector: 'app-tutor-profile',
  imports: [PageContentSection, MediaCarousel, CommonModule, ReviewList, RouterLink, FormsModule, CountryDropDown],
  standalone: true,
  templateUrl: './tutor-profile.html',
  styleUrl: './tutor-profile.scss',
})
export class TutorProfile implements OnInit {
  showCarousel = false;

  @Input() tutorAccount = false;

  subjects: string [] = [];

  subject='';
  isHovering= false;
  hoveredIndex: number | null = null;

  searchTerm = '';
  headline = '';
  tutorName = '';
  price?: number;
  aboutme = '';
  imageurl = '';
  error?: string;
  country = 'United Kingdom'; // get it to fetch the country from the other component
  city = 'london';
  email = ''

 
  id = 11;

 
private tutorService = inject(TutorService);

  getTutorDetails() {
    this.tutorService.getdetails(this.id).subscribe({
      next: (dto: BaseTutor) => {
        this.tutorName = dto.name;
        this.email = dto.email;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load tutor details';
      }
    });
  }
  

update() { // send to 
  const payload: TutorProfileUpdateRequest = {
    headline: this.headline,
    aboutMe: this.aboutme,
    price: this.price,
    subjects: this.subjects,
    imageUrl: this.imageurl,
    status: 'Fill Profile',
    location: {
      country: this.country,
      city: this.city,
    },
    email: 'hi@hi.com',
  };
  console.log("payload",payload);
  return payload;
}

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
 
}

  @Input() tutor!: TutorProfileModel;

  ngOnInit(): void {
   this.getTutorDetails();

    
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorCard } from '../card/tutor-card/tutor-card';
import { TutorCard as TutorCardModel } from '../../domain/models/tutor-card.model';

@Component({
  selector: 'app-tutor-card-list',
  imports: [TutorCard, CommonModule],
  standalone: true,
  templateUrl: './tutor-card-list.html',
  styleUrl: './tutor-card-list.scss',
})
export class TutorCardList implements OnInit {
  tutors: TutorCardModel[] = [];

  ngOnInit(): void {
    // Sample data - replace with actual service call
    // this.tutors = [
    //   {
    //     id: 1,
    //     name: 'Ahmed Hassan',
    //     imageUrl: 'assets/images/tutor1.jpg',
    //     headline: 'Expert Islamic Scholar',
    //     likes: 156,
    //     price: 1.70,
    //     rating: { average: 4.8, count: 42 },
    //     reviews: [],
    //     location: { country: 'Egypt', city: 'Cairo' },
    //     summary: 'Experienced Quran and Islamic studies tutor with 10+ years of teaching experience.',
    //   },
    //   {
    //     id: 2,
    //     name: 'Fatima Al-Zahra',
    //     imageUrl: 'assets/images/tutor2.jpg',
    //     headline: 'Arabic Language Specialist',
    //     likes: 203,
    //     rating: { average: 4.9, count: 58 },
    //     reviews: [],
    //     location: { country: 'Saudi Arabia', city: 'Riyadh' },
    //     summary: 'Specialized in teaching Arabic language and Islamic sciences to students worldwide.',
    //   },
    //   {
    //     id: 3,
    //     name: 'Muhammad Ali',
    //     imageUrl: 'assets/images/tutor3.jpg',
    //     headline: 'Hadith Specialist',
    //     likes: 178,
    //     rating: { average: 4.7, count: 35 },
    //     reviews: [],
    //     location: { country: 'UAE', city: 'Dubai' },
    //     summary: 'Expert in Hadith sciences and Islamic jurisprudence with comprehensive knowledge.',
    //   },
    //   {
    //     id: 4,
    //     name: 'Aisha Mahmoud',
    //     imageUrl: 'assets/images/tutor4.jpg',
    //     headline: 'Quran Memorization Coach',
    //     likes: 267,
    //     rating: { average: 5.0, count: 71 },
    //     reviews: [],
    //     location: { country: 'Malaysia', city: 'Kuala Lumpur' },
    //     summary: 'Dedicated to helping students memorize the Quran with proper pronunciation and tajweed.',
    //   },
    //   {
    //     id: 1,
    //     name: 'Ahmed Hassan',
    //     imageUrl: 'assets/images/tutor1.jpg',
    //     headline: 'Expert Islamic Scholar',
    //     likes: 156,
    //     rating: { average: 4.8, count: 42 },
    //     reviews: [],
    //     location: { country: 'Egypt', city: 'Cairo' },
    //     summary: 'Experienced Quran and Islamic studies tutor with 10+ years of teaching experience.',
    //   },
    //   {
    //     id: 2,
    //     name: 'Fatima Al-Zahra',
    //     imageUrl: 'assets/images/tutor2.jpg',
    //     headline: 'Arabic Language Specialist',
    //     likes: 203,
    //     rating: { average: 4.9, count: 58 },
    //     reviews: [],
    //     location: { country: 'Saudi Arabia', city: 'Riyadh' },
    //     summary: 'Specialized in teaching Arabic language and Islamic sciences to students worldwide.',
    //   },
    //   {
    //     id: 3,
    //     name: 'Muhammad Ali',
    //     imageUrl: 'assets/images/tutor3.jpg',
    //     headline: 'Hadith Specialist',
    //     likes: 178,
    //     rating: { average: 4.7, count: 35 },
    //     reviews: [],
    //     location: { country: 'UAE', city: 'Dubai' },
    //     summary: 'Expert in Hadith sciences and Islamic jurisprudence with comprehensive knowledge.',
    //   },
    //   {
    //     id: 4,
    //     name: 'Aisha Mahmoud',
    //     imageUrl: 'assets/images/tutor4.jpg',
    //     headline: 'Quran Memorization Coach',
    //     likes: 267,
    //     rating: { average: 5.0, count: 71 },
    //     reviews: [],
    //     location: { country: 'Malaysia', city: 'Kuala Lumpur' },
    //     summary: 'Dedicated to helping students memorize the Quran with proper pronunciation and tajweed.',
    //   },
    //   {
    //     id: 3,
    //     name: 'Muhammad Ali',
    //     imageUrl: 'assets/images/tutor3.jpg',
    //     headline: 'Hadith Specialist',
    //     likes: 178,
    //     rating: { average: 4.7, count: 35 },
    //     reviews: [],
    //     location: { country: 'UAE', city: 'Dubai' },
    //     summary: 'Expert in Hadith sciences and Islamic jurisprudence with comprehensive knowledge.',
    //   },
    //   {
    //     id: 4,
    //     name: 'Aisha Mahmoud',
    //     imageUrl: 'assets/images/tutor4.jpg',
    //     headline: 'Quran Memorization Coach',
    //     likes: 267,

    //     rating: { average: 5.0, count: 71 },
    //     reviews: [],
    //     location: { country: 'Malaysia', city: 'Kuala Lumpur' },
    //     summary: 'Dedicated to helping students memorize the Quran with proper pronunciation and tajweed.',
    //   },
 
  }
}

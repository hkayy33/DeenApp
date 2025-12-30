import { Review } from './review.model';
import { Rating } from './rating.model';

export interface TutorCard {
  id: number;
  name: string;
  imageUrl: string;
  headline: string;
  likes: number;
  rating: Rating;
  reviews: Review[];
  location: {
    country: string;
    city: string;
  };
  contactInfo: {
    phoneNumber: string;
    email: string;
  };
  description: string;
}

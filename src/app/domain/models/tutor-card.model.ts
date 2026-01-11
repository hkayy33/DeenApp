import { BaseTutor } from "./base-tutor.model";
import { Rating } from "./rating.model";
import { Review } from "./review.model";

export interface TutorCard extends BaseTutor{
  summary: string;
  imageUrl: string;
  headline: string;
  price: number;
  likes: number;
  rating: Rating;
  reviews: Review[];
  location: {
    country: string;
    city: string;
  }; 
}

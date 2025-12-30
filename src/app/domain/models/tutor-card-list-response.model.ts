import { TutorCard } from './tutor-card.model';

export interface TutorCardListResponse {
  items: TutorCard[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

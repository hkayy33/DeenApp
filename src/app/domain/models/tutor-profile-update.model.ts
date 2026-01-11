
export interface TutorProfileUpdateRequest {
  name?: string;
  headline?: string;
  price?: number;
  aboutMe?: string;
  imageUrl?: string | null;
  subjects?: string[];
  status?: string;
  location?: {
    country?: string;
    city?: string;
  };
  phoneNumber?: string;
  email?: string;
}

<details>
<summary>Tutor Card Component</summary>

# Tutor Card JSON

## Example JSON Structure
```json
[
  {
    "id": 123,
    "name": "xxx",
    "headline": "Math Tutor • GCSE & A-Level",
    "likes": 7,
    "rating": {
      "average": 4.5,
      "count": 2
    },
    "reviews": [
      {
        "id": 1,
        "reviewerName": "Sarah",
        "rating": 5,
        "comment": "Very clear explanations and very patient.",
        "createdAt": "2025-01-12"
      },
      {
        "id": 2,
        "reviewerName": "Ali",
        "rating": 4,
        "comment": "Helped me a lot",
        "createdAt": "2025-01-05"
      }
    ],
    "location": {
      "country": "United Kingdom",
      "city": "London"
    },
    "contactInfo": {
      "phoneNumber": "12390232",
      "email": "email@email.com"
    },
    "description": "Experienced tutor"
    },
    {
    "id": 124,
    "name": "Jane Doe",
    "headline": "Physics Tutor • University Level",
    "likes": 12,
    "rating": {
      "average": 4.9,
      "count": 5
    },
    "reviews": [
      {
        "id": 3,
        "reviewerName": "Tom",
        "rating": 5,
        "comment": "Excellent explanations.",
        "createdAt": "2025-01-08"
      }
    ],
    "location": {
      "country": "United Kingdom",
      "city": "Manchester"
    },
    "contactInfo": {
      "phoneNumber": "55512345",
      "email": "jane@email.com"
    },
    "description": "University physics tutor with 8 years experience"
  }
]


```

## TypeScript Models

### 🧩 tutor-card.model.ts
```typescript
import { Review } from './review.model';
import { Rating } from './rating.model';

export interface TutorCard {
  id: number;
  name: string;
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
```

### ⭐ rating.model.ts
```typescript
export interface Rating {
  average: number;
  count: number;
}
```

### 📝 review.model.ts
```typescript
export interface Review {
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: string; // ISO 8601 date (YYYY-MM-DD)
}
```

### 📦 tutor-card-response.model.ts
```typescript
import { TutorCard } from './tutor-card.model';

export interface TutorCardListResponse {
  items: TutorCard[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}


</details>
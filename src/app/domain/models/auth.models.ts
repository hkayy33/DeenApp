// src/app/core/models/auth.models.ts
export interface SignupRequest {
  FullName: string;
  Email: string;
  Password: string;
  ConfirmPassword?: string; // optional if your API uses it
}

export interface AuthResponse {
  token: string;
  userId: number;
  email: string;
  name: string;
}

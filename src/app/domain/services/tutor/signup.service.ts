// src/app/core/services/tutor.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../../models/auth.models';
import { SignupRequest } from '../../models/auth.models';

@Injectable({ providedIn: 'root' })
export class TutorService {
  constructor(private http: HttpClient) {}

  baseUrl = '/api/tutors';

  updateProfile(payload: any) {
    return this.http.put(`${this.baseUrl}`, payload);
  }

  signup(payload: SignupRequest){
    return this.http.post('/api/users/tutor-signup', payload);
  }
}

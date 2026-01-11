// src/app/core/services/tutor.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, loginRequest } from '../../models/auth.models';
import { SignupRequest } from '../../models/auth.models';
import { BaseTutor } from '../../models/base-tutor.model';

@Injectable({ providedIn: 'root' })
export class TutorService {
  constructor(private http: HttpClient) {}

  baseUrl = '/api/tutors';

  updateProfile(payload: any) {
    return this.http.put(`${this.baseUrl}/profile`, payload);
  }

  signup(payload: SignupRequest){
    return this.http.post('/api/users/tutor-signup', payload);
    // <authResponse>
  }

  login(payload: loginRequest){
    return this.http.post<AuthResponse>('/api/users/login', payload);
  }

  getdetails(id : number){
    return this.http.get<BaseTutor>(`/api/tutors/${id}`);
  }
}

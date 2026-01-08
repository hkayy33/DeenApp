import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PageContentSection } from '../../../shared/page-content-section/page-content-section/page-content-section';
import { SignupRequest } from '../../../domain/models/auth.models';
import { TutorService } from '../../../domain/services/tutor/signup.service';

@Component({
  selector: 'app-tutor-signup',
  standalone: true,
  imports: [PageContentSection, ReactiveFormsModule],
  templateUrl: './tutor-signup.html',
  styleUrl: './tutor-signup.scss',
})
export class TutorSignup {
  loading = false;
  error?: string;
  form;


  constructor(private fb: FormBuilder, private tutorService: TutorService) {

    this.form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    acceptTerms: [false, [Validators.requiredTrue]],
  });
  }

  submit() {
    console.log(this.form);
    this.error = undefined;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();

    if (v.password !== v.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    // ✅ Map form -> API payload (PascalCase to match backend DTO)
    const payload = {
      FullName: v.fullName!.trim(),
      Email: v.email!.trim(),
      Password: v.password!,
      ConfirmPassword: v.confirmPassword!,
    };

    this.loading = true;
    this.tutorService.signup(payload).subscribe({
      next: (res) => {
        this.loading = false;
        // navigate / store token etc.
        console.log('Signed up:', res);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message ?? 'Signup failed';
      },
    });
  }
}

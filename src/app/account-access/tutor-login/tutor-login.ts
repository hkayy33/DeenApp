import { Component } from '@angular/core';
import { PageContentSection } from '../../shared/page-content-section/page-content-section/page-content-section';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TutorService } from '../../domain/services/tutor/signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-login',
  imports: [CommonModule, ReactiveFormsModule, PageContentSection],
  templateUrl: './tutor-login.html',
  styleUrl: './tutor-login.scss',
})
export class TutorLogin {

  form;
  error?: string;
  loading = false;

  constructor(private fb: FormBuilder, private tutorService: TutorService) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, [Validators.requiredTrue]],
    });
  }

  submit() {
    this.error = undefined;
    const v = this.form.getRawValue();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = {
      email: v.email!.trim(),
      password: v.password!,
    };

    this.loading = true;
    this.tutorService.login(payload).subscribe({
      next: (res) => {
        this.loading = false;
        // navigate / store token etc
        console.log('logged in:', res);
        if (res.IsTutor) {

        }
      },
      error: (err) => {
        this.loading = false;
        console.log('LOGIN ERROR:', err);

        this.error =
          err?.error?.message ??
          (typeof err?.error === 'string' ? err.error : null) ??
          err?.message ??
          `login failed (${err?.status})`;
      },

    });
  }

}

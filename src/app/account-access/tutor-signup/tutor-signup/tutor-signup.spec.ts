import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSignup } from './tutor-signup';

describe('TutorSignup', () => {
  let component: TutorSignup;
  let fixture: ComponentFixture<TutorSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

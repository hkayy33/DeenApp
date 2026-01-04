import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorOnboarding } from './tutor-onboarding';

describe('TutorOnboarding', () => {
  let component: TutorOnboarding;
  let fixture: ComponentFixture<TutorOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorOnboarding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

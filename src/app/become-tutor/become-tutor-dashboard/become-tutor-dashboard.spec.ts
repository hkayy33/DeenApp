import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeTutorDashboard } from './become-tutor-dashboard';

describe('BecomeTutorDashboard', () => {
  let component: BecomeTutorDashboard;
  let fixture: ComponentFixture<BecomeTutorDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeTutorDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeTutorDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

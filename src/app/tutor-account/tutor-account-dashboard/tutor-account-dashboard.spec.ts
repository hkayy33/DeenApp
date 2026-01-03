import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAccountDashboard } from './tutor-account-dashboard';

describe('TutorAccountDashboard', () => {
  let component: TutorAccountDashboard;
  let fixture: ComponentFixture<TutorAccountDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAccountDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorAccountDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

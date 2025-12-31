import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTutorDashboard } from './find-tutor-dashboard';

describe('FindTutorDashboard', () => {
  let component: FindTutorDashboard;
  let fixture: ComponentFixture<FindTutorDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTutorDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTutorDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

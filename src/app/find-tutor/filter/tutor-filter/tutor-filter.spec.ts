import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorFilter } from './tutor-filter';

describe('TutorFilter', () => {
  let component: TutorFilter;
  let fixture: ComponentFixture<TutorFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

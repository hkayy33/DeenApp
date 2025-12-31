import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCardList } from './tutor-card-list';

describe('TutorCardList', () => {
  let component: TutorCardList;
  let fixture: ComponentFixture<TutorCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorCardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

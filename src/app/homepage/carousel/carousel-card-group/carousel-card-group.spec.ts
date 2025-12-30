import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardGroup } from './carousel-card-group';

describe('CarouselCardGroup', () => {
  let component: CarouselCardGroup;
  let fixture: ComponentFixture<CarouselCardGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCardGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

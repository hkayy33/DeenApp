import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDropDown } from './country-drop-down';

describe('CountryDropDown', () => {
  let component: CountryDropDown;
  let fixture: ComponentFixture<CountryDropDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDropDown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDropDown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

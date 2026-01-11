import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorLogin } from './tutor-login';

describe('TutorLogin', () => {
  let component: TutorLogin;
  let fixture: ComponentFixture<TutorLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

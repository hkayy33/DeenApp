import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentSection } from './page-content-section';

describe('PageContentSection', () => {
  let component: PageContentSection;
  let fixture: ComponentFixture<PageContentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContentSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

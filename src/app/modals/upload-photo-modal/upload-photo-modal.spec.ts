import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoModal } from './upload-photo-modal';

describe('UploadPhotoModal', () => {
  let component: UploadPhotoModal;
  let fixture: ComponentFixture<UploadPhotoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPhotoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPhotoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

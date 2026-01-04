import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVideoModal } from './upload-video-modal';

describe('UploadVideoModal', () => {
  let component: UploadVideoModal;
  let fixture: ComponentFixture<UploadVideoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadVideoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadVideoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

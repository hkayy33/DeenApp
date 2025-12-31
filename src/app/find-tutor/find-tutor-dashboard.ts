import { Component } from '@angular/core';
import { PageContainer } from '../shared/page-container/page-container';
import { PageContentSection } from '../shared/page-content-section/page-content-section/page-content-section';
import { TutorCardList } from './tutor-card-list/tutor-card-list';
import { TutorFilter } from './filter/tutor-filter/tutor-filter';

@Component({
  selector: 'app-find-tutor-dashboard',
  imports: [PageContainer, PageContentSection, TutorCardList, TutorFilter],
  templateUrl: './find-tutor-dashboard.html',
  styleUrl: './find-tutor-dashboard.scss',
})
export class FindTutorDashboard {

  

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { allContentES, allContentEN } from 'src/shared/data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = allContentEN.education;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { allContentES, allContentEN } from 'src/shared/data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule, TimelineModule, TagModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experience = allContentEN.experience.content;
  education = allContentEN.education;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { allContentES, allContentEN } from 'src/shared/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = allContentEN.skills.content;
}

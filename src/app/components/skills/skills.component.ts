import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { InplaceModule } from 'primeng/inplace';
import { allContentES, allContentEN } from 'src/shared/data';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TooltipModule, InplaceModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef;
  skills = allContentEN.skills.content;

  constructor() { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.skillsSection.nativeElement.classList.add('animate-icons');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.skillsSection.nativeElement);
  }
}

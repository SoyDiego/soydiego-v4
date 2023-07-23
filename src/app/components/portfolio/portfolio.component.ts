import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { allContentEN } from 'src/shared/data';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CarouselModule, TagModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio = allContentEN.portfolio.content;

}

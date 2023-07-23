import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allContentEN } from 'src/shared/data';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  references = allContentEN.references.content;

}

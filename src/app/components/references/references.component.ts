import { Component, OnInit } from '@angular/core';
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
export class ReferencesComponent implements OnInit {
  references = allContentEN.references.content;
  responsiveOptions: any;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '375px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}

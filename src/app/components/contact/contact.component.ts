import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allContentEN } from 'src/shared/data';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = allContentEN.contactMe;

  handleGoToTop() {
    console.log('test');
    window.scrollTo(0, 0);
  }

}

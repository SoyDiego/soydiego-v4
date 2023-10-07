import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferencesComponent } from './components/references/references.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    ReferencesComponent,
    PortfolioComponent,
    ContactComponent,
  ]
})
export class AppComponent { }
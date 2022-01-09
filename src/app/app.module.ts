import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './part/header/header.component';
import { HeroComponent } from './part/hero/hero.component';
import { AboutComponent } from './part/about/about.component';
import { SkillsComponent } from './part/skills/skills.component';
import { ResumeComponent } from './part/resume/resume.component';
import { ProjectsComponent } from './part/project/projects.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TextareaComponent } from './project-detail/textarea/textarea.component';
import { CarouselComponent } from './project-detail/carousel/carousel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ProjectsComponent,
    MainpageComponent,
    ProjectDetailComponent,
    TextareaComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

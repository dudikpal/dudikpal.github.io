import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from "./mainpage/mainpage.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'project-detail', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component' 
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  {path: 'contact-us', component: SubscriberFormComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/:id', component: ProjectDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  PortfolioComponent,
  ProjectDetailComponent
]

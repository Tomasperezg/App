import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: 'contact-us', component: SubscriberFormComponent},
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

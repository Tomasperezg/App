import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeparatorSComponent } from './separator-s/separator-s.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeftBannerComponent } from './left-banner/left-banner.component';
import { RightBannerComponent } from './right-banner/right-banner.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SeparatorSComponent,
    ButtonComponent,
    FooterComponent,
    SubscriberFormComponent,
    HomepageComponent,
    LeftBannerComponent,
    RightBannerComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

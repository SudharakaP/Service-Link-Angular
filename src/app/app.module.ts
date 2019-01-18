import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgsRevealModule } from 'ng-scrollreveal';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MoreInformationComponent } from './more-information/more-information.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MoreInfoJumbotronComponent } from './more-info-jumbotron/more-info-jumbotron.component';
import { MoreInfoContentComponent } from './more-info-content/more-info-content.component';
import { DeploymentContentComponent } from './deployment-content/deployment-content.component';
import { DeploymentJumbotronComponent } from './deployment-jumbotron/deployment-jumbotron.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { DemoRequestService } from './angular-services/demo-request.service';
import { PlatformsComponent } from './platforms/platforms.component';
import { PlatformsJumbotronComponent } from './platforms-jumbotron/platforms-jumbotron.component';
import { PlatformsContentComponent } from './platforms-content/platforms-content.component';
import { MissionComponent } from './mission/mission.component';
import { MissionJumbotronComponent } from './mission-jumbotron/mission-jumbotron.component';
import { MissionContentComponent } from './mission-content/mission-content.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { WhoAreWeContentComponent } from './who-are-we-content/who-are-we-content.component';
import { WhoAreWeJumbotronComponent } from './who-are-we-jumbotron/who-are-we-jumbotron.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutUs', component: MoreInformationComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'who-are-we', component: WhoAreWeComponent },
  { path: 'platforms', component: PlatformsComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    JumbotronComponent,
    CustomersComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    MoreInformationComponent,
    HomePageComponent,
    PageHeaderComponent,
    MoreInfoJumbotronComponent,
    MoreInfoContentComponent,
    DeploymentJumbotronComponent,
    DeploymentComponent,
    DeploymentContentComponent,
    PlatformsComponent,
    PlatformsJumbotronComponent,
    PlatformsContentComponent,
    MissionComponent,
    MissionJumbotronComponent,
    MissionContentComponent,
    WhoAreWeComponent,
    WhoAreWeContentComponent,
    WhoAreWeJumbotronComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
    NgsRevealModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DemoRequestService],
  bootstrap: [AppComponent],
  entryComponents: [PortfolioComponent]
})
export class AppModule { }

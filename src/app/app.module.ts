import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgsRevealModule} from 'ng-scrollreveal';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

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

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutUs', component: MoreInformationComponent },
  { path: 'deployment', component: DeploymentComponent }
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
    HttpClientModule
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    NgsRevealModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

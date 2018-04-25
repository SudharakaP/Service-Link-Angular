import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgsRevealModule} from 'ng-scrollreveal';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutUs', component: MoreInformationComponent }
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
    PageHeaderComponent
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    NgsRevealModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

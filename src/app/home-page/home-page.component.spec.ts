import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CustomersComponent } from '../customers/customers.component';
import { ContactComponent } from '../contact/contact.component';
import { HomePageComponent } from './home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { DemoRequestService } from '../angular-services/demo-request.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, MainHeaderComponent, JumbotronComponent, ServicesComponent, PortfolioComponent, CustomersComponent, ContactComponent ],
      imports: [ NgbModule.forRoot(), NgsRevealModule.forRoot(), FontAwesomeModule, FormsModule, ReactiveFormsModule, MatSnackBarModule, HttpClientModule ],
      providers: [ DemoRequestService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

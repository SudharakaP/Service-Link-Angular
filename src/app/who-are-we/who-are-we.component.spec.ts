import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { WhoAreWeJumbotronComponent } from '../who-are-we-jumbotron/who-are-we-jumbotron.component';
import { WhoAreWeContentComponent } from '../who-are-we-content/who-are-we-content.component';
import { WhoAreWeComponent } from './who-are-we.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('WhoAreWeComponent', () => {
  let component: WhoAreWeComponent;
  let fixture: ComponentFixture<WhoAreWeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAreWeComponent, PageHeaderComponent, WhoAreWeJumbotronComponent, WhoAreWeContentComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

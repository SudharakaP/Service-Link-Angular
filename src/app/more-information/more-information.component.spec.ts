import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { MoreInfoJumbotronComponent } from '../more-info-jumbotron/more-info-jumbotron.component';
import { MoreInfoContentComponent } from '../more-info-content/more-info-content.component';
import { MoreInformationComponent } from './more-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('MoreInformationComponent', () => {
  let component: MoreInformationComponent;
  let fixture: ComponentFixture<MoreInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInformationComponent, PageHeaderComponent, MoreInfoContentComponent, MoreInfoJumbotronComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

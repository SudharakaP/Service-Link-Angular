import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { DeploymentJumbotronComponent } from '../deployment-jumbotron/deployment-jumbotron.component';
import { DeploymentContentComponent } from '../deployment-content/deployment-content.component';
import { DeploymentComponent } from './deployment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('DeploymentComponent', () => {
  let component: DeploymentComponent;
  let fixture: ComponentFixture<DeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentComponent, PageHeaderComponent, DeploymentJumbotronComponent, DeploymentContentComponent ],
      imports: [ NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

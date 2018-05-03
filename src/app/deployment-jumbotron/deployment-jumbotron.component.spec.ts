import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentJumbotronComponent } from './deployment-jumbotron.component';

describe('DeploymentJumbotronComponent', () => {
  let component: DeploymentJumbotronComponent;
  let fixture: ComponentFixture<DeploymentJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

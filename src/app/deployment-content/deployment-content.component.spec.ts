import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentContentComponent } from './deployment-content.component';

describe('DeploymentContentComponent', () => {
  let component: DeploymentContentComponent;
  let fixture: ComponentFixture<DeploymentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

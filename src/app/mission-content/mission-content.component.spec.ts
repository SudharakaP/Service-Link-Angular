import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionContentComponent } from './mission-content.component';

describe('MissionContentComponent', () => {
  let component: MissionContentComponent;
  let fixture: ComponentFixture<MissionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

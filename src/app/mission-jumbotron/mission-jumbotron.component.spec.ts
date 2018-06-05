import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionJumbotronComponent } from './mission-jumbotron.component';

describe('MissionJumbotronComponent', () => {
  let component: MissionJumbotronComponent;
  let fixture: ComponentFixture<MissionJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

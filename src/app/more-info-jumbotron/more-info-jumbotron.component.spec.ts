import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoJumbotronComponent } from './more-info-jumbotron.component';

describe('MoreInfoJumbotronComponent', () => {
  let component: MoreInfoJumbotronComponent;
  let fixture: ComponentFixture<MoreInfoJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInfoJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

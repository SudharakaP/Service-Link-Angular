import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoContentComponent } from './more-info-content.component';

describe('MoreInfoContentComponent', () => {
  let component: MoreInfoContentComponent;
  let fixture: ComponentFixture<MoreInfoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInfoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

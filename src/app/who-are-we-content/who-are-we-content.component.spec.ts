import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeContentComponent } from './who-are-we-content.component';

describe('WhoAreWeContentComponent', () => {
  let component: WhoAreWeContentComponent;
  let fixture: ComponentFixture<WhoAreWeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAreWeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeJumbotronComponent } from './who-are-we-jumbotron.component';

describe('WhoAreWeJumbotronComponent', () => {
  let component: WhoAreWeJumbotronComponent;
  let fixture: ComponentFixture<WhoAreWeJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAreWeJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

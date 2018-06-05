import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsJumbotronComponent } from './platforms-jumbotron.component';

describe('PlatformsJumbotronComponent', () => {
  let component: PlatformsJumbotronComponent;
  let fixture: ComponentFixture<PlatformsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

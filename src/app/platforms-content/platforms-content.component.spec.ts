import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsContentComponent } from './platforms-content.component';

describe('PlatformsContentComponent', () => {
  let component: PlatformsContentComponent;
  let fixture: ComponentFixture<PlatformsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PlatformsJumbotronComponent } from '../platforms-jumbotron/platforms-jumbotron.component';
import { PlatformsContentComponent } from '../platforms-content/platforms-content.component';
import { PlatformsComponent } from './platforms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PlatformsComponent', () => {
  let component: PlatformsComponent;
  let fixture: ComponentFixture<PlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformsComponent, PageHeaderComponent, PlatformsJumbotronComponent, PlatformsContentComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

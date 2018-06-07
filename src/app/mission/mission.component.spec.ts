import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { MissionJumbotronComponent } from '../mission-jumbotron/mission-jumbotron.component';
import { MissionContentComponent } from '../mission-content/mission-content.component';
import { MissionComponent } from './mission.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('MissionComponent', () => {
  let component: MissionComponent;
  let fixture: ComponentFixture<MissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionComponent, PageHeaderComponent, MissionJumbotronComponent, MissionContentComponent ],
      imports: [ NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

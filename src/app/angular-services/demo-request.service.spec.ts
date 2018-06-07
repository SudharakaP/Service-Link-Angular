import { TestBed, inject } from '@angular/core/testing';
import { DemoRequestService } from './demo-request.service';
import { HttpClientModule } from '@angular/common/http';

describe('DemoRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DemoRequestService ],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([DemoRequestService], (service: DemoRequestService) => {
    expect(service).toBeTruthy();
  }));
});

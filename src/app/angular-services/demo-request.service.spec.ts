import { TestBed, inject } from '@angular/core/testing';

import { DemoRequestService } from './demo-request.service';

describe('DemoRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoRequestService]
    });
  });

  it('should be created', inject([DemoRequestService], (service: DemoRequestService) => {
    expect(service).toBeTruthy();
  }));
});

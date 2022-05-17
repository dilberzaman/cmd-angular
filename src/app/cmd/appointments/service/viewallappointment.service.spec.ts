import { TestBed } from '@angular/core/testing';

import { ViewallappointmentService } from './viewallappointment.service';

describe('ViewallappointmentService', () => {
  let service: ViewallappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewallappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Emp.ServiceService } from './emp.service.service';

describe('Emp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Emp.ServiceService]
    });
  });

  it('should be created', inject([Emp.ServiceService], (service: Emp.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});

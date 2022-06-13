import { TestBed } from '@angular/core/testing';

import { BusquedasServicesService } from './busquedas-services.service';

describe('BusquedasServicesService', () => {
  let service: BusquedasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

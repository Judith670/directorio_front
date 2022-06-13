import { TestBed } from '@angular/core/testing';

import { EmpresasServicesService } from './empresas-services.service';

describe('EmpresasServicesService', () => {
  let service: EmpresasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClientDALService } from './client-dal.service';

describe('ClientDALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDALService = TestBed.get(ClientDALService);
    expect(service).toBeTruthy();
  });
});

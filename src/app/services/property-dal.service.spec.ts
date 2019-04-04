import { TestBed } from '@angular/core/testing';

import { PropertyDALService } from './property-dal.service';

describe('PropertyDALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyDALService = TestBed.get(PropertyDALService);
    expect(service).toBeTruthy();
  });
});

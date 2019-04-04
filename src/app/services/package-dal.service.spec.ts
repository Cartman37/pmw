import { TestBed } from '@angular/core/testing';

import { PackageDAlService } from './package-dal.service';

describe('PackageDAlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageDAlService = TestBed.get(PackageDAlService);
    expect(service).toBeTruthy();
  });
});

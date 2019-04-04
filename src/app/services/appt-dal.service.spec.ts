import { TestBed } from '@angular/core/testing';

import { ApptDALService } from './appt-dal.service';

describe('ApptDALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApptDALService = TestBed.get(ApptDALService);
    expect(service).toBeTruthy();
  });
});

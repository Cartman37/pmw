import { TestBed } from '@angular/core/testing';

import { ItemDALService } from './item-dal.service';

describe('ItemDALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDALService = TestBed.get(ItemDALService);
    expect(service).toBeTruthy();
  });
});

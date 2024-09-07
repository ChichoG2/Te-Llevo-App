import { TestBed } from '@angular/core/testing';

import { IsConductorService } from './is-conductor.service';

describe('IsConductorService', () => {
  let service: IsConductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsConductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

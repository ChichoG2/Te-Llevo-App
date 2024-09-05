import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { conductorGuard } from './conductor.guard';

describe('conductorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => conductorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

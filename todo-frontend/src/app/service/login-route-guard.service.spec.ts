import { TestBed } from '@angular/core/testing';

import { LoginRouteGuardService } from './login-route-guard.service';

describe('LoginRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRouteGuardService = TestBed.get(LoginRouteGuardService);
    expect(service).toBeTruthy();
  });
});

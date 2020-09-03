import { TestBed } from '@angular/core/testing';

import { NoUsuarioLoginGuard } from './no-usuario-login.guard';

describe('NoUsuarioLoginGuard', () => {
  let guard: NoUsuarioLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoUsuarioLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

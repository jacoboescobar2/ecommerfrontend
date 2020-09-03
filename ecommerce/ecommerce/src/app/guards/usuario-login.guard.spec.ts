import { TestBed } from '@angular/core/testing';

import { UsuarioLoginGuard } from './usuario-login.guard';

describe('UsuarioLoginGuard', () => {
  let guard: UsuarioLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { SignUpAuthService } from './sign-up-auth.service';

describe('SignUpAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpAuthService]
    });
  });

  it('should be created', inject([SignUpAuthService], (service: SignUpAuthService) => {
    expect(service).toBeTruthy();
  }));
});

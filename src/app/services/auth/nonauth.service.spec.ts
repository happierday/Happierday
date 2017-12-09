import { TestBed, inject } from '@angular/core/testing';

import { NonauthService } from './nonauth.service';

describe('NonauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonauthService]
    });
  });

  it('should be created', inject([NonauthService], (service: NonauthService) => {
    expect(service).toBeTruthy();
  }));
});

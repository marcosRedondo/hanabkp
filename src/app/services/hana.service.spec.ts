import { TestBed } from '@angular/core/testing';

import { HanaService } from './hana.service';

describe('HanaService', () => {
  let service: HanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BilanService } from './bilan.service';

describe('BilanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilanService = TestBed.get(BilanService);
    expect(service).toBeTruthy();
  });
});

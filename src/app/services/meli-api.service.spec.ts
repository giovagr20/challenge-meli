import { TestBed } from '@angular/core/testing';

import { MeliApiService } from './meli-api.service';

describe('MeliApiService', () => {
  let service: MeliApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeliApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

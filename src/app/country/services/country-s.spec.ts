import { TestBed } from '@angular/core/testing';

import { CountryS } from './country-s';

describe('CountryS', () => {
  let service: CountryS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

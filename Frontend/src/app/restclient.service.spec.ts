import { TestBed } from '@angular/core/testing';

import { RestclientService } from './restclient.service';

describe('RestclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestclientService = TestBed.get(RestclientService);
    expect(service).toBeTruthy();
  });
});

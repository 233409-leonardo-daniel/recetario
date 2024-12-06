import { TestBed } from '@angular/core/testing';

import { IrecipeService } from './irecipe.service';

describe('IrecipeService', () => {
  let service: IrecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CasasService } from './casas.service';

describe('CasasService', () => {
  let service: CasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

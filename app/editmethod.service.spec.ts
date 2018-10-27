import { TestBed, inject } from '@angular/core/testing';

import { EditmethodService } from './editmethod.service';

describe('EditmethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditmethodService]
    });
  });

  it('should be created', inject([EditmethodService], (service: EditmethodService) => {
    expect(service).toBeTruthy();
  }));
});

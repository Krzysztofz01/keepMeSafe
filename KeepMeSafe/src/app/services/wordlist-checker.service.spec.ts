import { TestBed } from '@angular/core/testing';

import { WordlistCheckerService } from './wordlist-checker.service';

describe('WordlistCheckerService', () => {
  let service: WordlistCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordlistCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

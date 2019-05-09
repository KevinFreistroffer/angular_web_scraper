import { TestBed } from '@angular/core/testing';

import { UrlScrapeService } from './url-scrape.service';

describe('UrlScrapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlScrapeService = TestBed.get(UrlScrapeService);
    expect(service).toBeTruthy();
  });
});

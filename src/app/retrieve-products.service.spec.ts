import { TestBed, inject } from '@angular/core/testing';

import { RetrieveProductsService } from './retrieve-products.service';

describe('RetrieveProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveProductsService]
    });
  });

  it('should be created', inject([RetrieveProductsService], (service: RetrieveProductsService) => {
    expect(service).toBeTruthy();
  }));
});

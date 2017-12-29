import { TestBed, inject } from '@angular/core/testing';

import { ChangePurchaseService } from './change-purchase.service';

describe('ChangePurchaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangePurchaseService]
    });
  });

  it('should be created', inject([ChangePurchaseService], (service: ChangePurchaseService) => {
    expect(service).toBeTruthy();
  }));
});

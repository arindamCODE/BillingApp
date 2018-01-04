import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProductTable } from './ProductTable';
import { HttpClientService } from './services';

@Injectable()
export class RetrieveProductsService {

  public product: ProductTable[];

  public url: string;
  i: number;
  constructor(private http: HttpClientService) {
    this.url = 'http://localhost:3004/productTable';
  }

  getDetails() {
    return this.http.getData(this.url, null);
  }

}

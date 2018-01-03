import { Injectable } from '@angular/core';
import { ProductTable } from './ProductTable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangePurchaseService {

  //   url: string;
  //   url1: string;

  //   pro: ProductTable;

  //   id: number;
  //   productName: string;
  //   price: number;
  //   purchase = false;
  //   purchase1 = true;
  // constructor(private http: Http) {
  //   this.url = 'http://localhost:3004/productTable';
  // }

  // change(pro: ProductTable) {
  //   this.id = pro.id;
  //   this.productName = pro.productName;
  //   this.price = pro.price;
  //   this.putPurchase(this.purchase);
  // }

  // change1(pro: ProductTable) {
  //   this.id = pro.id;
  //   this.productName = pro.productName;
  //   this.price = pro.price;
  //   this.putPurchase(this.purchase1);
  // }

  // putPurchase(purchase: boolean) {
  //   this.url1 = `${this.url}/${this.id}`;

  //   this.pro = new ProductTable(this.id, this.productName, this.price, purchase);
  //       const headers = new Headers({ 'Content-Type': 'application/json' });
  //       const options = new RequestOptions({ headers: headers });

  //       this.http.put(this.url1, this.pro, options).map(response => response.json())
  //           .subscribe(
  //           () => { console.log('Success'); }
  //           );
  // }
}

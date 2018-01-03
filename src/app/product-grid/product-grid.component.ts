import { Component, OnInit } from '@angular/core';
import { ProductTable } from '../ProductTable';
import { ChangePurchaseService } from '../change-purchase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { RetrieveProductsService } from '../retrieve-products.service';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  // url: string;
  i: number;

  public product: ProductTable[];
  public product1: ProductTable[];

  constructor(private object: ChangePurchaseService, private object1: RetrieveProductsService) {
    console.log('from component');
    // this.url = 'http://localhost:3004/productTable';
    // this.getDetails();
  }

  ngOnInit() {
    this.getProductDetails();
  }

  // getDetails() {
  //   this.http.get(this.url).subscribe(result => {
  //     this.product = result.json() as ProductTable[];
  //     // this.product1 = this.product.filter(obj => obj.purchase = true);
  //   }, error => console.error(error));
  //   if (this.product != null) {
  //     return false;
  //   }else {
  //     return true;
  //   }
  // }

  // change(pro: ProductTable) {
  //   pro.purchase = false;
  //   this.object.change(pro);
  // }

  // change1(pro: ProductTable) {
  //   pro.purchase = true;
  //   this.object.change1(pro);
  // }
  // getDetailsByPurchase(){
  //   this.http.get(this.url).subscribe(result=>{
  //     this.product=result.json() as ProductTable[];
  //   }, error => console.error(error));
  // }

  getProductDetails() {
    console.log('inside getProductDeatils');
    this.object1.getDetails().subscribe(result => {
      this.product = result as ProductTable[];
    });
  }
}

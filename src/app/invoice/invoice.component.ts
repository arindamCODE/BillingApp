import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductTable } from '../ProductTable';
import { ProductGridComponent } from '../product-grid/product-grid.component';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
   
   url: string;
   public product: ProductTable[];
   public product1: ProductTable[];

   len: number;
   i: number;
   price: number = 0;
    

  constructor(private http: Http) {
    this.url = 'http://localhost:3004/productTable';
    this.getDetailsByPurchase();
   }

  ngOnInit() {
  }
  getDetailsByPurchase(){
      this.http.get(this.url).subscribe(result => {
       this.product = result.json() as ProductTable[];
      this.product1 = this.product.filter(obj => obj.purchase == true);
      this.getPrice(this.product1);
       }, error => console.error(error));
  }

  getPrice(pro: ProductTable[])
  {
    this.len = pro.length;
    for(this.i =0; this.i< this.len; this.i++)
    {
      this.price = this.price + pro[this.i].price;
    }
  }

}

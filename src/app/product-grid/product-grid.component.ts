import { Component, OnInit } from '@angular/core';
import { ProductTable } from '../ProductTable';
import { Http } from '@angular/http';
import { ChangePurchaseService } from '../change-purchase.service';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  url: string;

  public product: ProductTable[];

  constructor(private http: Http, private object: ChangePurchaseService) {
    this.url = 'http://localhost:3004/productTable';
    this.getDetails();
  }

  ngOnInit() {
  }

  getDetails() {
    this.http.get(this.url).subscribe(result => {
      this.product = result.json() as ProductTable[];
    }, error => console.error(error));
    if (this.product != null) {
      return false;
    }else {
      return true;
    }
  }

  change(pro: ProductTable) {
    pro.purchase = false;
    this.object.change(pro);
  }

  change1(pro: ProductTable) {
    pro.purchase = true;
    this.object.change1(pro);
  }
}

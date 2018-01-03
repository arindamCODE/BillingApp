import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';
import { ProductTable} from '../../ProductTable';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
   @Input('product') product:ProductTable;
   @Input('purchaseStatus') type:Boolean;

  constructor() { }

  ngOnInit() {

    // this.product.productName='Surf Excel';
    // this.product.price=56;
    
  }

}

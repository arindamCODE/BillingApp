import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';
import { ProductTable} from '../../ProductTable';
import { ChangePurchaseService} from '../../change-purchase.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
   @Input('product') product:ProductTable;
   @Input('purchaseStatus') type:Boolean;
   

  constructor( private object: ChangePurchaseService) { }

  ngOnInit() {

    // this.product.productName='Surf Excel';
    // this.product.price=56;
    
     

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
    
  



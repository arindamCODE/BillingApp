import { Component } from '@angular/core';
import { ProductTable } from './ProductTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public product:ProductTable[];
  


}

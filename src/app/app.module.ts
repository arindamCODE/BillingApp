import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductTable } from './ProductTable';
import { ChangePurchaseService } from './change-purchase.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { RetrieveProductsService } from './retrieve-products.service';
import { HttpClientService } from './services';

const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full'},
  { path: 'grid', component: ProductGridComponent},
  { path: 'invoice'  ,component :InvoiceComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ChangePurchaseService,
    RetrieveProductsService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

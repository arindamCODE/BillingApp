import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductTable } from './ProductTable';
import { ChangePurchaseService } from './change-purchase.service';
import { RetrieveProductsService } from './retrieve-products.service';
import { HttpClientService } from './services';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'grid', component: ProductGridComponent },
  { path: 'invoice', component: InvoiceComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    InvoiceComponent,
    ProductCardComponent,
    ListComponent
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

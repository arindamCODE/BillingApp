import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductTable } from './ProductTable';
import { ChangePurchaseService } from './change-purchase.service';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

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
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    HttpModule,
    ChangePurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

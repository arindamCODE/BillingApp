import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';


import { AppComponent } from './app.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductTable } from './ProductTable';
import { ChangePurchaseService } from './change-purchase.service';

const routes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full'},
  { path: 'grid', component: ProductGridComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent
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

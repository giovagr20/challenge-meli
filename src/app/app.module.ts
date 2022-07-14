import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    SearchProductsComponent,
    ListProductsComponent,
    DetailProductsComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SearchProductsComponent]
})
export class AppModule { }

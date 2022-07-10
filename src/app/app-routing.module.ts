import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';

const routes: Routes = [
  {
    path: '',
    component: SearchProductsComponent
  },
  {
    path: 'items',
    component: ListProductsComponent
  },
  {
    path: 'items/:id',
    component: DetailProductsComponent
  },
  {
    path: '**',
    component: SearchProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

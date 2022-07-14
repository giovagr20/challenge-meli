import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { ErrorComponent } from './components/error/error.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  {
    path: '',
    component: SearchProductsComponent,
    children: [
      {
        path: 'items',
        component: ListProductsComponent,
      },
      {
        path: 'items/:item',
        component: DetailProductsComponent,
      }
    ]
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';


const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children:[
      { path: '', component: ProductListingsComponent},
      { path: ':productsId', component: ProductDetailComponent}
    ]
  },
];


@NgModule({
  declarations: [
    ProductComponent,
    ProductListingsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class ProductModule { }

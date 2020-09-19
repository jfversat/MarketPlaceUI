import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [

  { path: "", component:CarouselComponent },
  { path:'products', component:ProductComponent },
  { path: 'category', component:CategoryComponent },
  { path: 'shoppingCart', component:ShoppingCartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

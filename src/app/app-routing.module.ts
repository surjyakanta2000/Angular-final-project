import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsdetailComponent } from './electronicsdetail/electronicsdetail.component';
import { ProductsComponent } from './products/products.component';
import {CartComponent} from './cart/cart.component';
import { TvappComponent } from './tvapp/tvapp.component';
import { TvappdComponent } from './tvappd/tvappd.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
const routes: Routes = [
  
  {path:'products',component:ProductsComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'electronics/:itemid',component:ElectronicsdetailComponent},
  {path:'cart',component:CartComponent},
  {path:'tvapp',component:TvappComponent},
  {path:'tvapp/:itemid',component:TvappdComponent},
  {path:"manwomen",component:FashionComponent},
  {path:"manwomen/:itemid",component:FashiondetailsComponent},
  {path:'**',redirectTo:'products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

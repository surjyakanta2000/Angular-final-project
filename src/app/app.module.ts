import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsdetailComponent } from './electronicsdetail/electronicsdetail.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CartComponent } from './cart/cart.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { KdComponent } from './kd/kd.component';
import { TvappComponent } from './tvapp/tvapp.component';
import { TvappdComponent } from './tvappd/tvappd.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ElectronicsComponent,
    ElectronicsdetailComponent,
    PreloaderComponent,
    CartComponent,
    KitchenComponent,
    KdComponent,
    TvappComponent,
    TvappdComponent,
    FashionComponent,
    FashiondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

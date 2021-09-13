import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { HttpClientModule } from "@angular/common/http";
import { NewShortComponent } from './components/new-short/new-short.component';
import { ShopBasketComponent } from './components/shop-basket/shop-basket.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NewShortComponent,
    ShopBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

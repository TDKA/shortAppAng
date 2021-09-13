import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewShortComponent } from './components/new-short/new-short.component';
import { ShopBasketComponent } from './components/shop-basket/shop-basket.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'new', component: NewShortComponent },
  { path: 'basket', component: ShopBasketComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

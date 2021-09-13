import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: any = [];

  constructor() { }

  give() {
    return this.basket;
  }

  take(short) {
    this.basket = short
  }





}

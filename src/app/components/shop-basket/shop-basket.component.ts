import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.css']
})
export class ShopBasketComponent implements OnInit {

  basketSorted: any = [];

  basketBordel: any = [];

  constructor(private basketService: BasketService) { }

  //Remove from basket
  removeFromCart(thisShort: any) {

    //1. Remove the object of the array basketSorted which has the shorts

    // let indexShort = this.basketSorted.indexOf(thisShort);
    // this.basketSorted.splice(indexShort, 1);
    this.basketSorted.splice(
      this.basketSorted.findIndex((short: any) => short.id == thisShort.id)
    )

    //2. Delete all shorts of this type in basketBordel
    // while ( this.basketBordel.findIndex( (short: any) => short.id == thisShort) != -1) {

    //   this.basketBordel.splice( this.basketBordel.findIndex( (short: any) => short.id == thisShort), 1 )

    // }

    this.basketBordel = this.basketBordel.filter((short: any) => short.id != thisShort)

    this.basketService.take(this.basketBordel)
  }

  //Estimated total price of shorts in basketBordel
  totalAmount() {
    let total = 0;

    for (let i = 0; i < this.basketSorted.length; i++) {
      let short = this.basketSorted[i];
      total += short.price * short.quantity;
    }

    console.log(total);
    return total;

  }

  sortBasket(basketBordel: any) {

    let basketSorted: any = [];

    basketBordel.forEach((shortBordel: any) => {

      //if this short exist in the basket
      //vij dali v basketShort ima short s id ravno na short id v basketBordel

      let indexPossible = basketSorted.findIndex((shortStored: any) => shortStored.id == shortBordel.id)

      if (indexPossible >= 0) {

        basketSorted[indexPossible].quantity++
      }
      else {
        let newShort = {

          id: shortBordel.id,
          name: shortBordel.name,
          color: shortBordel.color,
          size: shortBordel.size,
          price: shortBordel.price,
          quantity: 1

        }

        basketSorted.push(newShort);

      }

    });

    return basketSorted
  }

  ngOnInit(): void {

    this.basketBordel = this.basketService.give()
    this.basketSorted = this.sortBasket(this.basketBordel)
    console.log(this.basketSorted)

  }

  ngOnDestroy(): void {
    this.basketService.take(this.basketBordel)
  }





}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  allShorts: any = [];

  basket: any = [];

  constructor(private http: HttpClient, private basketService: BasketService) { }

  findAll() {
    this.http.get('http://localhost:8000/api/short')
      .subscribe(allShortData => {
        this.allShorts = allShortData;
      });
  }

  deleteShort(id: number) {
    this.http.delete('http://localhost:8000/api/delete/' + id).subscribe(data => {
      console.log(data);
      this.findAll();
    });
  }

  addToBasket(short: any, quantity: any) {

    for (let i = 1; i <= quantity; i++) {
      this.basket.push(short);

    }

    //basketService = livreur
    this.basketService.take(this.basket);

    console.log('This short has been added to the basket!');


  };



  ngOnInit(): void {
    this.findAll();

    //dava mi koshnicata za da se razhojdam s neya v magazina
    this.basket = this.basketService.give();
  }





}

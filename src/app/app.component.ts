import { Component } from '@angular/core';
import { BasketService } from './services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopShort';

  basket: any = [];

  constructor(private basketService: BasketService) {

  }

  ngOnInit(): void {

  }

  //number of shorts in basket
  totalShorts() {

    return this.basketService.give().length

  }
}

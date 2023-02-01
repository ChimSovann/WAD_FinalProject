import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

 
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  router: any;

  constructor(private cartService: CartService, router: Router) {}

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}

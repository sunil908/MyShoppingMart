import { Component, OnInit } from '@angular/core';
import {CartItems} from "../models/cartitem.model";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {
   cartItems:CartItems[]=[]

  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cartItems=this.cs.getCartDataItem();
  }

  totalAmount(){
    let tot=0;
    for(let e of this.cartItems){
      tot=tot + (e.price*e.quantity);
    }
    return tot;
      
    }

    removeFromCart(idx:number){
      this.cs.deleteCartItem(idx);
    }
  }

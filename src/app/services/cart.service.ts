import { Injectable } from "@angular/core";
import { CartItems } from "../models/cartitem.model";

@Injectable()
export class CartService {
    private cartDataItems:CartItems[]=[];
    constructor(){}

    getCartDataItem(){
        return this.cartDataItems;
    }

    addCartDataItem(newItem:CartItems){
        this.cartDataItems.push(newItem);
    }

    deleteCartItem(idx:number){
        this.cartDataItems.splice(idx,1);
    }
}
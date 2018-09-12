import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model"
import {ProductService} from "../services/product.service"
import { CartService } from '../services/cart.service';
import { CartItems } from '../models/cartitem.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]

  constructor(private ps:ProductService, private csvc:CartService) { }

  ngOnInit() {
    this.products=this.ps.getProducts();
  }

addToCart(selProduct:Product){
  let newitem=new CartItems(selProduct.id, selProduct.name, 1, selProduct.price )
  this.csvc.addCartDataItem(newitem);
}

}

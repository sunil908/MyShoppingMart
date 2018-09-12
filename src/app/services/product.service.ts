import { Injectable } from "@angular/core";
import {Product} from "../models/product.model"

@Injectable()
export class ProductService{
    private productData:Product[] = []

    constructor(){
        this.productData=[new Product(1,"Bravia", 65000,"Sony TV"),
                          new Product(2,"Galazy Note 8", 45000,"Samsung Mobile"),
                          new Product(3,"XBox", 25500,"Microsoft XBox")
                         ]
    }

    getProducts(){ // Impicit return type is taken here
        return this.productData;
    }

}
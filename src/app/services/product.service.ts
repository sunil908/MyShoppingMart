import { Injectable } from "@angular/core";
import {Product} from "../models/product.model"
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService{
    private productData:Product[] = []
    private restUrl = "http://localhost:3000/wsproducts"
    constructor(private http:HttpClient){}

    getProducts(){ // Impicit return type is taken here
        //return this.productData;
        return this.http.get<Product[]>(this.restUrl);
    }

}
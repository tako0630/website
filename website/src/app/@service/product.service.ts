import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { product } from "../@model/products.model";
@Injectable({
    providedIn:'root'
})

export class ProductService{
    url :string = 'http://localhost:8080';
    products: product[]=[];
    constructor(private http:HttpClient){
    
    }
    gethomepage(){
        return this.http.get<product[]>(this.url+'/home');
    }
    getProducts(){
        return this.http.get<product[]>(this.url+'/products');
    }
}
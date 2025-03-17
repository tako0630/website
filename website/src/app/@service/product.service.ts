import { product } from './../@model/products.model';
import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
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
    updateProduct(product:product){
        return this.http.put(this.url+'/products/update',product,{responseType:'text'});
    }
}
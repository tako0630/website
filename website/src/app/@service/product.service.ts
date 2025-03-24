import { product } from './../@model/products.model';
import { HttpClient } from "@angular/common/http";
import {Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})

export class ProductService{
    url :string = 'http://localhost:8080/api';
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
    updateImage(id:number,file:FormData){
        return this.http.put(this.url+'/api/upload-image/'+id, file,{responseType:'text'});
    }
    getImage(id:number){
        return this.http.get(this.url+'/api/image/'+id);
    }
    addProduct(file:FormData){
        return this.http.post<product>(this.url+'/products/add',file);
    }
    delete(id:number){
        return this.http.delete('http://localhost:8080/products/delete/'+id,{responseType:'text'});
    }
}
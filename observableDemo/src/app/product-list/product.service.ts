import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private apiurl:string ="http://localhost:3000/productList";
  private apiurl:string ="http://localhost:3000/product";
  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>(this.apiurl);
  }

  addProduct(p:Product):Observable<any>{
    return this.http.post<any>(this.apiurl,p);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.apiurl+"/"+id);
  }

  updateProduct(p:Product):Observable<any>{
    return this.http.put<any>(this.apiurl+"/"+p.id,p);
  }

  
}

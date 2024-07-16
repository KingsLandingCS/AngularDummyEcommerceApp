import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dummyjson.com';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products`);
  }

  getProductsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${id}`);
  }

  addToCart(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cart/add`, product);
  }

  getCart(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cart`);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/orders/add`, order);
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/orders`);
  }
}

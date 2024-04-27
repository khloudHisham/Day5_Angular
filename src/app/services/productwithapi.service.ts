import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductwithapiService {

  baseUrl: string = 'http://localhost:11063/products';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseUrl);
  }
  getProductById(productId: number) {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }
  addNewProduct(product: any) {
    return this.http.post(this.baseUrl, product);
  }
  editProduct(productId: number, product: any) {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }
  deleteProduct(productId: number) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}

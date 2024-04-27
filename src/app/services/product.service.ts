import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productsList } from '../models/productsList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Iproduct[]=[];

  constructor() {
    this.products=productsList;
   }
   getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product) => product.id == productId);
  }
  addNewProduct(product: Iproduct) {
    this.products.push(product);

    return this.products;
  }
  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }
  //We will make it 

  editProduct(productId: number, product: Iproduct) {
    debugger
    const index = this.products.findIndex((p) => p.id == productId);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
    }
    return this.products;
    debugger
  }
  
}

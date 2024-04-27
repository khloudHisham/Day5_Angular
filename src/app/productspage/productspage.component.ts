import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../models/iproduct'; 
import { ProductwithapiService } from '../services/productwithapi.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'

})
export class ProductsComponent implements OnInit {
  products: Iproduct[];
  constructor(public ProductService: ProductwithapiService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.ProductService.getAllProduct().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteHandler(productId: number) {
    this.ProductService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
      },
      error: () => {},
    });
  }

}
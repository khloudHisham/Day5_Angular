import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent implements OnInit{
 
    products: Iproduct[];
    constructor(public productservice:ProductService) {
      this.products = [];
    }
    ngOnInit(): void {
      this.productservice.getAllProducts().subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  
    deleteHandler(productId: number) {
      this.products = this.productservice.deleteProduct(productId);
    }

    
  }


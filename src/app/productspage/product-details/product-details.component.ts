import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductwithapiService } from '../../services/productwithapi.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product?:Iproduct;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductwithapiService,
    public router: Router) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  backToProducts() {
    this.router.navigate(['/products']);
  }
}

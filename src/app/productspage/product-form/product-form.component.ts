import { CommonModule } from '@angular/common';
import { productsList } from '../../models/productsList';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router ,ActivatedRoute  } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
 productForm=new FormGroup({
  name:new FormControl ('',[Validators.required
    ,Validators.minLength(3),
  ]),
  price:new FormControl (null,[Validators.required,Validators.min(10)]),
quantity:new FormControl (null,[Validators.required,Validators.min(1)]),

 });
  productId: any;
  product: any;
  constructor(
    public productServices: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.productServices.getProductById(this.productId);
     
    }
  }
  get getName(){return this.productForm.controls['name'];}
  get getprice(){return this.productForm.controls['price'];}
  get getQuantity(){return this.productForm.controls['quantity'];}

  productHandler() {
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        this.productServices.addNewProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        // edit
        this.productServices
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else {
      console.log('Form inValid');
    }
  }
}


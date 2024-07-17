import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.apiService.getProductsById(id).subscribe(product =>{
      this.product = product;
    });
  }

  addToCart(): void{
    this.apiService.addToCart({productId: this.product.id, quantity: 1}).subscribe(() => {
      alert("Product added to cart");
    })
  }
}

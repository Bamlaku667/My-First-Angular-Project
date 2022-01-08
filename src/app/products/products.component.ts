import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from './product.object';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  productList = PRODUCTS;


  constructor(private router: Router) {}

  ngOnInit(): void {
     
    
  }

  onViewDetail(id: number) {
    this.router.navigateByUrl('products/detail/' + id)
  }

}

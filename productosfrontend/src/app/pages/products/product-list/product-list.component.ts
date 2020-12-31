import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.productService.paginate().subscribe((response) => {
      console.log(response);
    });
  }

}

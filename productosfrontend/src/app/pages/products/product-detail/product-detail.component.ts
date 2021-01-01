import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {STATUS} from '../../../models/product-status';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  status = 'searching';
  color: ThemePalette = null;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.status = 'searching';
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.productService.find(id)
      .subscribe(
        product => {
          this.product = product;
          this.setColor();
          console.log(this.color);
          this.status = 'found';
        },
        () => this.status = 'not_found');
  }

  setColor(): ThemePalette {
    const status = parseInt(this.product.status_id.toString(), 10);
    if (status === STATUS.COMMERCIAL) { this.color = 'primary'; return; }
    if (status === STATUS.NORMAL) { this.color = 'accent'; return; }
    if (status === STATUS.DISCONTINUED) { this.color = 'warn'; return; }
    this.color = 'primary';
  }

}

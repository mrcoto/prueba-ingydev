import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  @Output() onCardClicked = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedCard($event: Product): void {
    this.onCardClicked.emit($event);
  }

}

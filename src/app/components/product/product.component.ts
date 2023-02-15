import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/data.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() dataProduct: Product = {
    id: 24,
    title:'',
    price: 0,
    images: [],
  };


}

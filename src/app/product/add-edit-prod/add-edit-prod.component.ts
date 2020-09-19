import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-prod',
  templateUrl: './add-edit-prod.component.html',
  styleUrls: ['./add-edit-prod.component.css']
})
export class AddEditProdComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() prod: any;
  productId: any;
  productName: string;
  productDescription: string;
  productPrice: any;
  productCategory: any;
  productPhoto: string;

  ngOnInit(): void {
    this.productId = this.prod.productId;
    this.productName = this.prod.productName;
    this.productDescription = this.prod.productDescription;
    this.productPrice = this.prod.productPrice;
    this.productCategory = this.prod.productCategory;
    this.productPhoto = this.prod.productPhoto;

  }

  showProduct(id) {
    this.service.getProduct(id).subscribe(data => {
      this.prod = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList: any = [];
  transactionId: any;
  userId: any;
  TotalPrice: number = 0;

  ngOnInit(): void {
    this.refreshCartDetail();
  }

  refreshCartDetail() {
    this.transactionId = sessionStorage.getItem('transactionId');
    this.userId = sessionStorage.getItem('userId');
    const uN = sessionStorage.getItem('userName');
    this.TotalPrice = 0;
    if (this.transactionId != null && this.userId != null) {

      this.service.getShoppingCartDetail(this.transactionId, this.userId).subscribe(data => {
        this.ProductList = data;
        this.refreshTotalPrice();
      });
    }

  }

  removeFromCart(id) {
    this.service.removeProductFromShoppingCart(id).subscribe(res => {
      if (res === 'Product removed Successfully') {
        this.refreshCartDetail();
      }
    });

    if (this.ProductList.length < 1) {
      sessionStorage.removeItem('transactionId');
    }
  }

  refreshTotalPrice() {
    this.ProductList.forEach(product => {
      this.TotalPrice += parseInt(product.Subtotal);
    });
  }

}

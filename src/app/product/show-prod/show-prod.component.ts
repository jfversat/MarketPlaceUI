import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service: SharedService) { }

  productList: any = [];
  ModalTitle: string;
  ActivateAddEditProdComp:boolean = false;
  prod: any;
  CategoryList: any = [];
  productSearch: string;

  ngOnInit(): void {
    this.refreshProductList();
    this.refreshCategoryList();
  }

  addProduct() {
    this.prod = {
      productId: 0,
      productName: '',
      productDescription: '',
      productPrice: '',
      productCategory: '',
      productPhoto: '',
    }
    this.ModalTitle = 'Add Product';
    this.ActivateAddEditProdComp = true;
  }

  closeProductModal() {
    this.ActivateAddEditProdComp = false;
    this.refreshProductList();
  }

  showProduct(item) {
    this.prod = item;
    this.ModalTitle = 'Product Detail';
    this.ActivateAddEditProdComp = true;
  }

  refreshProductList() {
    this.service.getProductList().subscribe(data => {
      this.productList = data;
    });
  }

  filterCategory(value) {
    this.service.searchByCategory(value).subscribe(data => {
      this.productList = data;
    });
  }

  onChange(event) {
    console.log('changing category');

    var value = event.target.options[event.target.options.selectedIndex].text;
    this.filterCategory(value);
  }

  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
    });
  }

  searchProduct() {
    this.service.searchByName(this.productSearch).subscribe(data => {
      this.productList = data;
    });
  }

  addToCart(product) {
    const uId = sessionStorage.getItem('userId');
    const uN = sessionStorage.getItem('userName');
    const tId = sessionStorage.getItem('transactionId');

    product.transactionId = tId;
    product.userId = uId;
    product.quantity = 1;

    console.log('from component ts: ', product);

    if (uN) {
      this.service.addProductToShoppingCart(product).subscribe(res => {
        console.log(res);
        sessionStorage.setItem('transactionId', res[0].TransactionId);
      });
    }else {
      alert('You Must Be Logged In');
    }
  }
}

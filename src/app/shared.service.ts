import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:50735/api';

  constructor(private http:HttpClient) { }

  // Product API
  getProductList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Product');
  }

  getProduct(val:any) {
    return this.http.get(this.APIUrl + '/Product/' + val);
  }

  addProduct(val:any) {
    return this.http.post(this.APIUrl + '/Product', val);
  }

  updateProduct(val:any) {
    return this.http.put(this.APIUrl + '/Product', val);
  }

  deleteProduct(val:any) {
    return this.http.delete(this.APIUrl + '/Product/' + val);
  }

  searchByName(val:any) {
    return this.http.get(this.APIUrl + '/SearchByName', { params: { productName: val} });
  }

  searchByCategory(val:any) {
    return this.http.get(this.APIUrl + '/SearchByCategory', { params: { productCategory: val} });
  }

  // User API
  getUserList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Users');
  }

  getUser(val:any) {
    return this.http.get(this.APIUrl + '/Users/' + val);
  }

  addUser(val:any) {
    return this.http.post(this.APIUrl + '/Users', val);
  }

  updateUser(val:any) {
    return this.http.put(this.APIUrl + '/Users', val);
  }

  // CategoryAPI
  getCategoryList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ProductsCategory');
  }

  getProductCategory(val:any) {
    return this.http.get(this.APIUrl + '/ProductsCategory/' + val);
  }

  addProductCategory(val:any) {
    return this.http.post(this.APIUrl + '/ProductsCategory', val);
  }

  updateProductCategory(val:any) {
    return this.http.put(this.APIUrl + '/ProductsCategory', val);
  }

  deleteProductCategory(val:any) {
    return this.http.delete(this.APIUrl + '/ProductsCategory/' + val);
  }

  // ShoppingCart API
  getShoppingCartDetail(tId: any, uId: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/GetShoppingCartDetail?transactionId=' + tId + '&userId=' + uId);
  }

  addProductToShoppingCart(val:any) {
    return this.http.post(this.APIUrl + '/AddProductToShoppingCart', val);

  }

  removeProductFromShoppingCart(val:any) {
    return this.http.delete(this.APIUrl + '/RemoveProductFromShoppingCart?Id=' + val);
  }

}

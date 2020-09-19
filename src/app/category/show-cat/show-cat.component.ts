import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];
  ProductList:any=[];

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
    });
  }

  onChange(event) {
    console.log('changing category');

    var value = event.target.options[event.target.options.selectedIndex].text;
    this.showByCategory(value);
  }

  showByCategory(value) {
    this.service.searchByCategory(value).subscribe(data => {
      this.ProductList = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listProduct: Product[] = [];
  optionValue: string = "";
  searchName: string = "";

  constructor() { }

  ngOnInit(): void {
    this.listProduct = this.readData();
  }

  //Sắp xếp theo giá
  orderByProduct() {
    if (this.optionValue == "ASC") {
      this.listProduct.sort((a, b) => a.price - b.price);
    } else if (this.optionValue == "DESC") {
      this.listProduct.sort((a, b) => b.price - a.price);
    }
  }

  //Tìm kiếm tên sản phẩm
  searchProduct() {
    let list: Product[] = [];
    let searchString = this.searchName;
      if (!searchString || searchString == "") {
        return this.listProduct;
      }
      searchString = searchString.trim().toLowerCase();
      list = this.listProduct.filter(item => item.productName.toLowerCase().indexOf(searchString) != -1);
      return list;
  }
  
  readData() {
    let data = localStorage.getItem('listProduct');
    if (data != null) {
      return JSON.parse(data);
    }
    return [];
  }

}

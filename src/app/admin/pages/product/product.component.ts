import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  product_needs_edit: Product = new Product;
  isShowForm: boolean = true;
  //Tạo biến vị trí hiện tại của sản phẩm cần edit trong mảng products
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.products = this.readData();
  }

  //Hiển thị form
  showForm() {
    this.isShowForm = false;
  }
  //Đóng form
  closeForm() {
    this.isShowForm = true;
    this.product_needs_edit = new Product;
    window.location.reload();
  }
  //Thực hiện thêm 1 sản phẩm đã được tạo vào mảng products và lưu vào localStorage
  addProduct(product: Product) {
    this.products.push(product);
    this.isShowForm = true;
    this.saveData();
  }
  //Mở form edit và gửi dữ liệu sản phẩm cần edit đến FormProductComponent
  openUpdateForm(index: number) {
    this.product_needs_edit = this.products[index];
    this.currentIndex = index;
    this.showForm();
  }
  //Cập nhật lại dữ liệu sản phẩm đã được edit vào mảng products và lưu localStorage
  updateProduct(item: Product) {
    this.closeForm();
    this.products[this.currentIndex] = item;
    this.saveData();
  }

  saveData() {
    localStorage.setItem('listProduct', JSON.stringify(this.products));
  }

  readData() {
    let data = localStorage.getItem('listProduct');
    if (data != null) {
      return JSON.parse(data);
    }
    return [];
  }


}

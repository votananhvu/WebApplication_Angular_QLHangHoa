import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  product:Product = new Product;
  //Tạo Output để gửi dữ liệu sản phẩm được tạo đến Component Product
  @Output('add-product') newProduct:EventEmitter<any> = new EventEmitter;
  //Tạo Input nhận dữ liệu của 1 sản phẩm cần edit và đưa lên form
  @Input('product_edit') product_edit:Product = new Product;
  //Tạp Output gửi dữ liệu của sản phẩm đã đc edit đến Component Product
  @Output('edited') updateProduct:EventEmitter<any> = new EventEmitter;

  isShowButton:boolean = true;
  //Khởi tạo mảng chứa tên image sản phẩm
  img_array:string[] = [];
  baseImgUrl:string = '../../../../../assets/images/';

  constructor() { }
  
  ngOnInit(): void {
    this.img_array = [
      'asus-rog-phone-5-black.jpeg','iphone-11-pro-vang.jpg',
      'iphone-12-promax.jpg','iphone-13-promax.jpg','k40pro.jpg',
      'redmi-k40-gaming.png','redminote10s.jpg',
    ];
  }

  //Kiểm tra dữ liệu sản phẩm và gửi đến Conponent Product
  doAddProduct() {
    if (this.product.productName != "" && this.product.price != 0) {
      this.newProduct.emit(this.product);
      this.product = new Product;
    } else {
      alert("Tên sản phẩm, giá bán không được để trống");
    }
  }
  //Gửi dữ liệu sản phẩm đã được edit đến Component Product
  doUpdate() {
    this.updateProduct.emit(this.product_edit);
    this.product_edit = new Product;
  }
  //Hiển thị/ẩn input add hoặc input edit sản phẩm
  showInput() {
    if (this.product_edit.productName != "") {
      return false;
    }
    return true;
  }

}

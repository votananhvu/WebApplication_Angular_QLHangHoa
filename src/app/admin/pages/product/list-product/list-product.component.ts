import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  //Tạo Input nhận dữ liệu sản phẩm từ Component Product
  @Input('list-product') listProduct:Product[] = [];
  //Tạo Output gửi dữ liệu vị trí của sản phẩm cần edit đến Component Product
  @Output('edit-product') editItem:EventEmitter<any> = new EventEmitter;

  isShowDeleteButton = false;

  constructor() { }

  ngOnInit(): void {

  }

  //Xóa 1 sản phẩm và cập nhật lại dữ liệu vào localStorage sau khi xóa
  deleteProduct(index:number, item:Product) {
    if(confirm(`Bạn có chắc sẽ xóa sản phẩm ${item.productName} ?`)){
      this.listProduct.splice(index,1);
      localStorage.setItem('listProduct',JSON.stringify(this.listProduct));
    }
  }
  
  //Gửi dữ liệu vị trí của item cần edit đến Component Product
  sendItemToEdit(index:number) {
    this.editItem.emit(index);
    this.isShowDeleteButton = true;
  }

}

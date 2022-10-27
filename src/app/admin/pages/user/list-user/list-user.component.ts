import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  //Tạo Input nhận dữ liệu account từ Component Product
  @Input('list-user') listAccount:Account[] = [];
  //Tạo Output gửi dữ liệu vị trí của account cần edit đến Component Product
  @Output('edit-user') editItem:EventEmitter<any> = new EventEmitter;

  isShowDeleteButton = false;

  constructor() { }

  ngOnInit(): void {

  }

  //Xóa 1 account và cập nhật lại dữ liệu vào localStorage sau khi xóa
  deleteAccount(index:number, item:Account) {
    if(confirm(`Bạn có chắc sẽ xóa ${item.name} ?`)){
      this.listAccount.splice(index,1);
      localStorage.setItem('listAccount',JSON.stringify(this.listAccount));
    }
  }

  //Gửi dữ liệu vị trí của item cần edit đến Component Product
  sendItemToEdit(index:number) {
    this.editItem.emit(index);
    this.isShowDeleteButton = true;
  }

}

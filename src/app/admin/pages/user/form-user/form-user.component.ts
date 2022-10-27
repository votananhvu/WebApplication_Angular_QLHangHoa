import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  
  account:Account = new Account;
  //Tạo Output để gửi dữ liệu user đăng ký đến Component User
  @Output('register') register:EventEmitter<any> = new EventEmitter;
  //Tạo Input nhận dữ liệu của 1 user cần edit và đưa lên form
  @Input('account_edit') account_edit:Account = new Account;
  //Tạp Output gửi dữ liệu của user đã đc update đến Component User
  @Output('edited') updateUser:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  //Kiểm tra dữ liệu từ form và gửi dữ liệu account đến Component User
  doRegister() {
    if (this.account.name != "" && this.account.username != "" && this.account.password != "") {
      this.register.emit(this.account);
      this.account = new Account;
    } else {
      alert("Name, Username, Password không được để trống");
    }
  }

  //Gửi dữ liệu account đã được chỉnh sửa đến Component User
  doUpdate() {
    this.updateUser.emit(this.account_edit);
    this.account_edit = new Account;
  }
  //Hiển thị/ẩn input đăng ký hoặc input edit
  showInput() {
    if (this.account_edit.name != "") {
      return false;
    }
    return true;
  }

}

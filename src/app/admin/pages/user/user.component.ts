import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  accounts: Account[] = [];
  account_needs_edit: Account = new Account;
  isShowForm: boolean = true;
  //khởi tạo biến vị trí hiện tại của account cần edit trong mảng accounts
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.accounts = this.readData();
  }
  //Hiển thị form
  showForm() {
    this.isShowForm = false;
  }
  //Đóng form
  closeForm() {
    this.isShowForm = true;
    this.account_needs_edit = new Account;
    window.location.reload();
  }
  //Thêm dữ liệu account đã đăng ký từ FormUserComponent vào accounts và lưu vào localStorage
  onRegister(account: Account) {
    this.accounts.push(account);
    this.saveData();
    this.isShowForm = true;
  }
  //Thực hiện mở form edit và gửi dữ liệu account lên form
  openUpdateForm(index: number) {
    this.account_needs_edit = this.accounts[index];
    this.currentIndex = index;
    this.showForm();
  }
  //Thực hiện cập nhật dữ liệu đã chỉnh sửa và lưu vào accounts và localStorage
  updateAccount(item: Account) {
    this.closeForm();
    this.accounts[this.currentIndex] = item;
    this.saveData();
  }

  saveData() {
    localStorage.setItem('listAccount', JSON.stringify(this.accounts));
  }

  readData() {
    let data = localStorage.getItem('listAccount');
    if (data != null) {
      return JSON.parse(data);
    }
    return [];
  }

}

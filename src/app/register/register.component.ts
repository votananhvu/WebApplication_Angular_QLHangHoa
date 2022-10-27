import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  new_account: Account = new Account;
  accounts: Account[] = [];
  re_password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.accounts = this.readData();
  }

  //Thực hiện đăng ký account sau khi submit form
  onSubmit(frm: NgForm) {
    if (frm.valid) {
      if (this.new_account.password == this.re_password) {
        this.accounts.push(this.new_account);
        this.saveData();
        this.router.navigate(['/login']);
        alert("Đăng kí thành công");
      } else {
        alert("password và nhập lại password không trùng nhau");
      }
    } else {
      alert("Đăng ký thất bại");
    }
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

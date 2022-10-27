import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  //Thực hiện kiểm tra đăng nhập, localStorage('user') đã có dữ liệu user hợp lệ?
  checkLogin() {
    let user_login = localStorage.getItem('user');
    if (user_login) {
      let user:User = JSON.parse(user_login);
      return this.verifyUser(user);
    }
    return false;
  }

  //Xác thực dữ liệu đăng nhập từ form login
  verifyUser(user:User) {
    let listAccount = localStorage.getItem('listAccount');
    if (listAccount) {
      let accounts:Account[] = JSON.parse(listAccount);

      for (let account of accounts) {
        if ((user.username == account.username && user.password == account.password)) {
          return true;
        }
      }
    }

    if ((user.username == 'admin' && user.password == "123")) {
      return true;
    }
    return false;
  }

  //Lưu user hợp lệ từ form login vào localStorage
  doLogin(user:User) {
    if (this.verifyUser(user)) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }
}

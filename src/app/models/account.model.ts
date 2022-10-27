export class Account {
    name:string = "";
    username:string = "";
    password:string = "";
    address:string = "";
    birthday:Date = new Date;

    constructor (name:string = "", username:string= "", password:string= "", address:string= "", birthday:Date = new Date)
    {
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
        this.birthday = birthday;
        
    }
}
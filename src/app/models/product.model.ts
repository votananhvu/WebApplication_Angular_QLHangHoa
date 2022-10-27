export class Product {
    productName:string = "";
    price:number = 0;
    quantity:number = 0;
    imgUrl:string = "";
    dateProduct:Date = new Date;

    constructor (productName:string = "", price:number = 0, quantity:number= 0, imgUrl:string= "", dateProduct:Date = new Date)
    {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        // this.imgUrl = `../../../../../assets/images/${imgUrl}`;
        this.imgUrl = imgUrl;
        this.dateProduct = dateProduct;     
    }
}
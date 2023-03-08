"use strict";
// interface IProduct {
//   id: string;
//   title: string;
//   price: number;
// }
// interface IDeliveryToHome {
//   adress: string;
// }
// interface IDeliveryToPoint {
//   shopsId: number;
// }
// interface IDelivery extends IDeliveryToHome, IDeliveryToPoint {
//   date: Date;
// }
// interface ICart {
//   product: IProduct[];
//   Delivery: IDelivery;
//   addProduct(product: Product): void;
//   removeProduct(product: Product): void;
//   calculateСostToCart(): number;
//   addDelivery(delivery: IDelivery): void;
//   checkOut(): boolean;
// }
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(data, address) {
        super(data);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopsId) {
        super(new Date());
        this.shopsId = shopsId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(productId) {
        this.products = this.products.filter((p) => p.id === productId);
    }
    getSum() {
        return this.products.reduce((accum, curr) => accum + curr.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error("There are no products in the cart");
        }
        if (!this.delivery) {
            console.log(this.delivery);
            throw new Error("There are not set delivery");
        }
        return { success: true };
    }
}
const myCart = new Cart();
const product1 = new Product(1, "Пицца", 500);
const product2 = new Product(2, "Роллы", 300);
const product3 = new Product(3, "Пироги", 700);
myCart.addProduct(product1);
myCart.addProduct(product2);
myCart.addProduct(product3);
myCart.deleteProductById(product2.id);
// console.log(myCart.products.length);
console.log(myCart.getSum());
// console.log(myCart.delivery);
const delivery = new HomeDelivery(new Date(), "moscow petrovka, 77");
myCart.setDelivery(delivery);
// console.log(myCart.delivery);
console.log(myCart.checkOut());

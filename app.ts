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
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(data: Date, public address: string) {
    super(data);
  }
}
class ShopDelivery extends Delivery {
  constructor(public shopsId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;
  addProduct(product: Product): void {
    this.products.push(product);
  }
  deleteProductById(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id === productId);
  }
  getSum(): number {
    return this.products.reduce(
      (accum: number, curr: Product) => accum + curr.price,
      0
    );
  }
  setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }
  checkOut(): object {
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

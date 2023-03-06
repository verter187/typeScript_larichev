type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new";
  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class ParsistedPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }
  save() {
    //Сохраняет в базу
  }

  override pay(date?: Date) {
    //super.pay();// Можно использовать метод родителя через super, но при удалении метода родителя будет возникать ошибка
    //Поэтому правильней использовать override, он будет производить ошибки при компиляции, если исходный метод будет удален.
    if (date) {
      this.paidAt = date;
    }
  }
}

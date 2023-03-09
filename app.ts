class Payment {
  private date: Date = new Date();

  getDate(this: Payment) {
    return this.date;
  }

  getDateArrow = () => this.date;
}

const p = new Payment();

const user = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow,
};

console.log(p.getDate());
console.log(user.paymentDate());
console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
  save() {
    // return super.getDateArrow(); //стрелочные методы не содержатся в прототипах и не доступны через super, будет вызвана ошибка.
    return this.getDateArrow(); // Но через this данные будут получены.
  }
}

console.log(new PaymentPersistent().save());

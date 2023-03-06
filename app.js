"use strict";
class Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class ParsistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        //Сохраняет в базу
    }
    pay(date) {
        //super.pay();// Можно использовать метод родителя через super, но при удалении метода родителя будет возникать ошибка
        //Поэтому правильней использовать override, он будет производить ошибки при компиляции, если исходный метод будет удален.
        if (date) {
            this.paidAt = date;
        }
    }
}
class User {
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
new Admin();
new Error("");
class HttpError extends Error {
    constructor(message) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}

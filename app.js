"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); //модификатор private - синтаксис js. Использовать только на фронте, в тех случаях, когда есть угроза подключения внешних скриптов.
    }
    set model(m) {
        this._model = m;
        this.run = 0;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f");
    }
    //модификатор private - функция с таким модификатором доступно только внутри класса
    addDemage(damage) {
        this.demages = []; //Внутри класса можем обращаться к приватному свойству
    }
}
_Vehicle_price = new WeakMap();
new Vehicle().make = "d";
// new Vehicle().demages = [7]; //При попытке вызвать private свойство из вне класса возникнет ошибка "Приватное свойство"
// new Vehicle().run = 0; //При попытке вызвать protected свойство возикает ошибка "Защищенное свойство доступно только вутри класса и субклассов"
class EuroTruck extends Vehicle {
    setDemage() {
        // this.demages; //Приватное свойство родительского класса Vehicle - demages, не доступно в дочернем классе.
    }
    setRun(km) {
        this.run = km / 0.62; //protected свойство доступно из субкласса.
    }
}

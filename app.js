"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    // getLogin(l: string) {
    //   this.login = "user-" + l;
    // }
    //Если явно не укажем тип параметра, то он будет получаться из значения return getter`a
    set login(l) {
        this._login = "user-" + l;
    }
    //Если нас установлен getter, но не установлен setter, то свойство _login автоматически становится readonly
    get login() {
        return this._login;
    }
    // для установки паролей лучше использовать асинхронные методы, как в примере ниже
    set password(p) { }
    getPassword(p) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
//setter и getter не могут быть асинхронными
const user = new User();
user.login = "myLogin";
console.log(user);
console.log(user.login);
// user.login = 'user-'  Проблема в том, что выносим присвоение из класса, а должно быть инкапсулированно внутри класса.

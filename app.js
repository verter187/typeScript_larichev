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
class UserService {
    static getUser(id) {
        // return this.db.findById(id);
        return UserService.db.findById(id); //Так также можно обращаться к статичным методам и изнутри класса.
    }
    static getUserAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // return this.db.findById(id);
            return UserService.db.findById(id); //Так также можно обращаться к статичным методам и изнутри класса.
        });
    }
    create() {
        UserService.db;
    }
}
//Возможность инициализации для статичных свойств класса(без создания экземпляра класса)
(() => {
    // await new Promise(); //Асинхронные методы не могут работать внутри блока static.
    UserService.db = "sdf";
})();
UserService.db; //
UserService.getUser(1); // Статичные методы можно выполнять без создания экземпляра класса.
const inst = new UserService();
inst.create(); //При создании экземпляра класса теряем доступ к его статичным методам.
// В js не нужно делать классы асинхронными, можно использовать отдельные асинхронные методы класса.

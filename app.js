"use strict";
let a = 5;
let b = a.toString();
let e = new String(a);
let f = new Boolean(a).valueOf();
let c = "5";
let d = parseInt(c);
const user = { name: "Vasya", email: "vasya@mail.ru", login: "vasya" };
// const admin: Admin = { ...user, role: 1 }; - не рекомендовано, в объекте будут поля, которые мы там не ожидаем. (email, login)
// правильно
function userToAdmin(user) {
    return { name: user.name, role: 1 };
}

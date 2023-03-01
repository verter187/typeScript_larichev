"use strict";
const user = { name: "Vasya", email: "vasya@mail.ru", login: "vasya" };
function logId(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === "string";
}
function isAdmin(user) {
    return "role" in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error("Пользователь не админ");
    }
}

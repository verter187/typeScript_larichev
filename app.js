"use strict";
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
// const a: never = undefined; // never не может присвоить ничего!
const b = undefined; //void может присвоить undefined
function processAction(action) {
    switch (action) {
        case "refound":
            //...
            break;
        case "checkout":
            //...
            break;
        case "reject":
            //...
            break;
        default: // never покажет ошибку, если появится новое действие.
            const _ = action;
            throw new Error("Нет такого action");
    }
}
function isString(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    generateError("sfdfdsfdsfd"); //Исчерпывающая проверка с функцией, возвращающей never
}

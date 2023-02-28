"use strict";
const n = null;
// const n1: null = undefined; //можем типу null присвоить только значение типа null
const n1 = null;
const n2 = null; //Не может присвоить типу number и прочим (string, boolian, undefined) значение null
const n3 = null;
const n4 = null;
const n5 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: "Vasya",
        };
    }
}
const user = getUser();
if (user) {
    const n55 = user.name;
}
//Если нужно возращать осознано отсутствующее значени, то нужно возвращать null, а не undefined

"use strict";
// interface User {
//   login: string;
//   password?: string;
// }
// type User = {
//   login: string;
//   password?: string;
// };
const user = {
    login: "a@a.ru",
    password: undefined,
};
//function multiply(first: number, second?: number): number {
function multiply(first, second = 5) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
console.log(multiply(5));
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}

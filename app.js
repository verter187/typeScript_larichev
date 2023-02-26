"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "ssd";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
//1 - Успех
//2 - в процессе
//3 - отклонен
if (res.statusCode === StatusCode.SUCCESS) {
    //proccessing
}
function action(status) { }
action(StatusCode.SUCCESS);
const res2 = 1 /* Roles.ADMIN */;
// enum Roles {
//   ADMIN = 1,
//   USER = compute(),
// }
// const test = (x: { ADMIN: number }) => {};

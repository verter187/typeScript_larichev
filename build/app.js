"use strict";
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
console.log(A.a);

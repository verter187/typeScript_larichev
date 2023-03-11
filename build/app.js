"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
console.log(getSplitedHalf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

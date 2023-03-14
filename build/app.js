"use strict";
function runTransaction(transaction) {
    console.log(transaction);
}
const transaction = {
    // fromTo: ["1", "2"] as [string, string], // Хардкорный вариант
    fromTo: ["1", "2"],
};
runTransaction(transaction);

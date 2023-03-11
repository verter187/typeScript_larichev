"use strict";
const data = [
    { id: 1, name: "John" },
    { id: 3, name: "Peter" },
    { id: 2, name: "Vasya" },
];
function sort(data, type = "asc") {
    return data.sort((a, b) => (type === "desc" ? b.id - a.id : a.id - b.id));
}
console.log(sort(data, "asc"));

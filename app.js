"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("Vasya");
console.log(user);
user.name = "Petya";
console.log(user);
class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

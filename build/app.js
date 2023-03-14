"use strict";
const a1 = Math.random() > 0.5 ? 1 : 0;
const suc = {
    code: 200,
    data: "done",
};
const err = {
    code: 200,
    data: new Error(),
};
class User {
}
class UserPersistence extends User {
}
function getUser(dbIdOrId) {
    if (typeof dbIdOrId === "number") {
        return new User();
    }
    else {
        return new UserPersistence();
    }
}
function getUser2(id) {
    if (typeof id === "number") {
        return new User();
    }
    else {
        return new UserPersistence();
    }
}
const res = getUser2(1);
const res1 = getUser2("sfdfsffds");

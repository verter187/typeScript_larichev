"use strict";
function fetchWithAuth(url, method) {
    console.log(method);
    return 1;
}
let method = "get";
fetchWithAuth("test", method);
// type UserWithRole = { user: User; role: Role };
let user = {
    name: "Stein",
    age: 33,
    id: 1,
    skills: ["dev", "devOps"],
};

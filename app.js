"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: "Andrew",
    surname: "Stein",
    sity: "moscow",
    age: 45,
    skills: { dev: true, devops: true },
};
console.log(getFullName(user));

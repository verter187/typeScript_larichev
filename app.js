"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiple(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => { };
const f2 = () => {
    return true;
};
const b = f2();
const skills = ["Dev", "Devops"];
const user = {
    s: ["s"],
};
skills.forEach((skill) => user.s.push(skill));
console.log(user);

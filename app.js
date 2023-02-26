"use strict";
const skills = ["Dev", "Devops", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const test = skills
    .filter((s) => s !== "Devops")
    .map((s) => {
    return 1;
})
    .reduce((a, b) => a + b);
console.log(test);

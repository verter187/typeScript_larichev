"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
new User().addSkill("test1");
function run(distance) {
    if (typeof distance === "number") {
        return 1;
    }
    else {
        return "";
    }
}
run();

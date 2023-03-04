class User {
  skills: string[];
  constructor() {
    this.skills = [];
  }
  addSkill(skill: string);
  addSkill(skill: string[]);
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else {
      this.skills.concat(skillOrSkills);
    }
  }
}

new User().addSkill("test1");

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
  if (typeof distance === "number") {
    return 1;
  } else {
    return "";
  }
}

run();

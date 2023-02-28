function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1);

function multiple(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => {
  return true;
};

const b = f2();

const skills = ["Dev", "Devops"];

const user = {
  s: ["s"],
};

skills.forEach((skill) => user.s.push(skill));
console.log(user);

// interface User {
//   login: string;
//   password?: string;
// }

interface User {
  login: string;
  password: string | undefined;
}

// type User = {
//   login: string;
//   password?: string;
// };

const user: User = {
  login: "a@a.ru",
  password: undefined,
};

//function multiply(first: number, second?: number): number {
function multiply(first: number, second: number = 5): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

console.log(multiply(5));

interface UserPro {
  login: string;
  password?: { type: "primary | secondary" };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply(5);
}

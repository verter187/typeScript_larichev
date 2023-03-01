let a = 5;
let b: string = a.toString();
let e = new String(a);
let f: boolean = new Boolean(a).valueOf();
let c = "5";
let d: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = { name: "Vasya", email: "vasya@mail.ru", login: "vasya" };

interface Admin {
  name: string;
  role: number;
}

// const admin: Admin = { ...user, role: 1 }; - не рекомендовано, в объекте будут поля, которые мы там не ожидаем. (email, login)

// правильно
function userToAdmin(user: User): Admin {
  return { name: user.name, role: 1 };
}

interface User {
  name: string;
  age?: number;
  email: string;
}

type p = Partial<User>; //Partial делает все поля будут необязательными
const p: p = {};

type required = Required<User>; //Required делает все поля обязательными
type readonly = Readonly<User>; //Readonly делает все поля только для чтения
type requiredAndReadonly = Required<Readonly<User>>; //Required<Readonly делает все поля только для чтения и обязательными

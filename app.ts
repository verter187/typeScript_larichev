class User {
  _login: string;
  _password: string;

  // getLogin(l: string) {
  //   this.login = "user-" + l;
  // }

  //Если явно не укажем тип параметра, то он будет получаться из значения return getter`a
  set login(l: string | number) {
    this._login = "user-" + l;
  }
  //Если нас установлен getter, но не установлен setter, то свойство _login автоматически становится readonly
  get login() {
    return this._login;
  }

  // для установки паролей лучше использовать асинхронные методы, как в примере ниже
  set password(p: string) {}

  async getPassword(p: string) {}
}

//setter и getter не могут быть асинхронными
const user = new User();
user.login = "myLogin";
console.log(user);
console.log(user.login);
// user.login = 'user-'  Проблема в том, что выносим присвоение из класса, а должно быть инкапсулированно внутри класса.

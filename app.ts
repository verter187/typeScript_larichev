class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Vasya");
console.log(user);
user.name = "Petya";
console.log(user);

class Admin extends User {
  role: number;
  constructor(name: string, role: number) {
    super(name);
    this.role = role;
  }
}

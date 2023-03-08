class UserService {
  // static name: string = "UserService";//Name конфликтует со встроенным function.name
  static db: any;
  static getUser(id: number) {
    // return this.db.findById(id);
    return UserService.db.findById(id); //Так также можно обращаться к статичным методам и изнутри класса.
  }
  static async getUserAsync(id: number) {
    // return this.db.findById(id);
    return UserService.db.findById(id); //Так также можно обращаться к статичным методам и изнутри класса.
  }

  create() {
    UserService.db;
  }

  //Возможность инициализации для статичных свойств класса(без создания экземпляра класса)
  static {
    // await new Promise(); //Асинхронные методы не могут работать внутри блока static.
    UserService.db = "sdf";
  }
}

UserService.db; //
UserService.getUser(1); // Статичные методы можно выполнять без создания экземпляра класса.

const inst = new UserService();
inst.create(); //При создании экземпляра класса теряем доступ к его статичным методам.

// В js не нужно делать классы асинхронными, можно использовать отдельные асинхронные методы класса.

abstract class Controller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log("Start");
    this.handle(req);
    console.log("End");
  }
}

// new Controller(); //Так создать экземпляр абстрактного класса нельзя, можно создать экземляр только наследуюемого класса.

class UserController extends Controller {
  //Абстрактные классы обязательно должны быть в субклассе!
  handle(req: any): void {
    console.log(req);
  }
}

new UserController(); //Можно создать экземляр класса, унаследованного от абстрактного класса.

//Абстрактный класс в отличие от интерфейса может в себе реализовывать какой-либо функционал и при наследовании мы получаем
//весь этот функционал (чего нельзя сделать с интерфейсами). К тому же, мы можем обращаться внутри абстрактного класса из
//необстрактных методов к абстрактным методам.

//Абстрактные методы могут быть тольков абстрактном классе.

const c = new UserController();
c.handleWithLogs("Request");

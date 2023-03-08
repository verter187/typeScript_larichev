class Vehicle {
  public make: string; //модификатор public - свойство доступно без ограничений. По умолчанию, без указания модификатора свойств - публичное.
  private demages: string[]; //модификатор private - свойство с таким модификатором доступно только внутри класса
  private _model: string;
  protected run: number; //модификатор protected - свойство с таким модификатором доступно только вутри класса и субклассов
  #price: number; //модификатор private - синтаксис js. Использовать только на фронте, в тех случаях, когда есть угроза подключения внешних скриптов.
  set model(m: string) {
    this._model = m;
    this.run = 0;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    this.#price === v.#price;
  }

  //модификатор private - функция с таким модификатором доступно только внутри класса
  private addDemage(damage: string) {
    this.demages = []; //Внутри класса можем обращаться к приватному свойству
  }
}

new Vehicle().make = "d";

// new Vehicle().demages = [7]; //При попытке вызвать private свойство из вне класса возникнет ошибка "Приватное свойство"
// new Vehicle().run = 0; //При попытке вызвать protected свойство возикает ошибка "Защищенное свойство доступно только вутри класса и субклассов"
class EuroTruck extends Vehicle {
  setDemage() {
    // this.demages; //Приватное свойство родительского класса Vehicle - demages, не доступно в дочернем классе.
  }
  setRun(km) {
    this.run = km / 0.62; //protected свойство доступно из субкласса.
  }
}

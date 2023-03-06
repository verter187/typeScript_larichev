interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  // error(...args: any[]): void { //Синхронный вариант
  //Асинхронный вариант
  async error(...args: any[]): Promise<void> {
    // Кинуть во внешнюю систему
    console.log(...args);
  }
}

interface IPayble {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User implements IPayble, IDeletable {
  delete(): void {
    throw new Error("Method not implemented.");
  }
  //тип, который должен быть в аргументах, всегда должен быть таким же или шире того типа,
  //который задан в интерфейсе
  pay(paymentId: number | number): void {
    ///
  }
  // price?: number | undefined;
}

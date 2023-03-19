function Uni(name: string): any {
  console.log(`Init: ${name}`);
  return function () {
    console.log(`Call: ${name}`);
  };
}

@Uni("Class")
class MyClass {
  @Uni("Property")
  props?: any;

  @Uni("Property static")
  static prop2?: any;

  @Uni("Method static")
  static method2(@Uni("Method param") _: any) {}

  @Uni("Method")
  method(@Uni("Method param") _: any) {}

  constructor(@Uni("constuctor param") _: any) {}
}

interface IForm {
  name: string;
  password: string;
  age: number;
}

const form: IForm = {
  name: "Vasya",
  password: "123",
  age: 30,
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: "Должен быть длинее 5 символов" },
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | { isValid: false; errorMessage: string };
};

type UserAccess2 = Validation<IForm>;

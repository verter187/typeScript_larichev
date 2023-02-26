enum StatusCode {
  SUCCESS = "ssd",
  IN_PROCESS = "p",
  FAILED = "f",
}

const res = {
  message: "Платеж успешен",
  statusCode: StatusCode.SUCCESS,
};

//1 - Успех
//2 - в процессе
//3 - отклонен

if (res.statusCode === StatusCode.SUCCESS) {
  //proccessing
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
// action(1);

// function compute() {
//   return 3;
// }

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;
// enum Roles {
//   ADMIN = 1,
//   USER = compute(),
// }

// const test = (x: { ADMIN: number }) => {};

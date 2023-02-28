function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

// const a: never = undefined; // never не может присвоить ничего!

const b: void = undefined; //void может присвоить undefined

type paymentAction = "refound" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refound":
      //...
      break;
    case "checkout":
      //...
      break;
    case "reject":
      //...
      break;
    default: // never покажет ошибку, если появится новое действие.
      const _: never = action;
      throw new Error("Нет такого action");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  generateError("sfdfdsfdsfd"); //Исчерпывающая проверка с функцией, возвращающей never
}

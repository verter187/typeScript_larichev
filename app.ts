const n: null = null;
// const n1: null = undefined; //можем типу null присвоить только значение типа null
const n1: any = null;
const n2: number = null; //Не может присвоить типу number и прочим (string, boolian, undefined) значение null
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

// Если флагу "strictNullChecks" в файле tsconfig.json присвоить false, то ошибки не будут возникать.

interface User {
  name: string;
}
function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Vasya",
    } as User;
  }
}

const user = getUser();
if (user) {
  const n55 = user.name;
}

//Если нужно возращать осознано отсутствующее значени, то нужно возвращать null, а не undefined

let input: unknown;

input = 3;
input = ["sf", "sfd"];

// let res: any = input;

function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    await fetch("");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); //Отработает нормально
    }
  }
}

async function getDataForce() {
  try {
    await fetch("");
  } catch (error) {
    const e = error as Error; //Будет ошибка, если error, к примеру, имеет строковой тип.
  }
}

type U1 = unknown | null | string | number | boolean; //Union type с unknown всегда будет unknown

type I1 = unknown & number; //Intersection (пересечение) unknown и любого другого типа возращает этот тип/типы.

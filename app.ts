function logId(id: string | number | boolean): void {
  if (typeof id === "string") {
    id.toLowerCase();
  } else if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id);
  }
  console.log(id);
}

// logId(1);
// logId("sdfsdf");
// logId(false);
function logError(err: string | string[]): void {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }): void {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean): void {
  if (a === b) {
    console.log(a, b);
  } else {
    console.log(a, b);
  }
}

const a: 1 = 1;

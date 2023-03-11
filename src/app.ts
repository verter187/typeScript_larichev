function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case "string":
      return data;
    case "number":
    case "boolean":
    case "bigint":
    case "symbol":
    case "function":
      return data.toString();
    case "object":
      return JSON.stringify(data);
    default:
      undefined;
  }
}

console.log(toString({ a: 7, b: 8, c: 9 }));
console.log(toString([1, 2, 3, 4, 5]));
console.log(toString(true));
console.log(toString(2000));
console.log(toString(null));

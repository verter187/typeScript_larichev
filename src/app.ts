const data = [
  { id: 1, name: "John" },
  { id: 3, name: "Peter" },
  { id: 2, name: "Vasya" },
];
interface ID {
  id: number;
}

function sort<T extends ID>(data: T[], type: "asc" | "desc" = "asc"): T[] {
  return data.sort((a, b) => (type === "desc" ? b.id - a.id : a.id - b.id));
}

console.log(sort(data, "asc"));

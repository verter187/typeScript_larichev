type httpMethod = "post" | "get";
type coolString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  console.log(method);
  return 1;
}

let method: httpMethod = "get";
fetchWithAuth("test", method);

type User =
  | { name: string; age: number; skills: string[] }
  | { name: string; age: number };

type Role = { id: number; name: string };

type UserWithRole = User & Role;
// type UserWithRole = { user: User; role: Role };

let user: UserWithRole = {
  name: "Stein",
  age: 33,
  id: 1,
  skills: ["dev", "devOps"],
};

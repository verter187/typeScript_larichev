// enum RequestType {
//   GET = "get",
//   POST = "post",
// }

function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  console.log(method);
  return -1;
}

let method: "post" = "post";
fetchWithAuth("test", method);

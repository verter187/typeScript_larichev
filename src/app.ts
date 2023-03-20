////@ts-ignore //Вариант 1
//Вариант 2: объявить модуль в файле types.d.ts
import { toJson } from "really-relaxed-json";
const rjson = "[ one two three {foo:bar} ]";
const json = toJson(rjson);
console.log(json);

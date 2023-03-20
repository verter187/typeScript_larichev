import run, { a, B } from "./module/app2.js";
import runing from "./module/app2.js";
import * as all from "./module/app2.js";
import { test as Cl } from "./module/app2.js";
import type { MyType } from "./module/app2.js";

const d: B = { c: 7 };
const z: MyType = 8;

run();
runing();
console.log(a);
Cl();
console.log(d);
console.log(all.a);
console.log(all.default());

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 3;
input = ["sf", "sfd"];
// let res: any = input;
function run(i) {
    if (typeof i == "number") {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("");
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message); //Отработает нормально
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("");
        }
        catch (error) {
            const e = error; //Будет ошибка, если error, к примеру, имеет строковой тип.
        }
    });
}

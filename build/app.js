"use strict";
const form = {
    name: "Vasya",
    password: "123",
    age: 30,
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: "Должен быть длинее 5 символов" },
};

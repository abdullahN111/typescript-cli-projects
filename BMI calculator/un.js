"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 7;
let b = 8;
let c = ++a + b++ - ++a + --b + a++;
console.log(c);
// 8 + 9 - 9 + 8 + 10

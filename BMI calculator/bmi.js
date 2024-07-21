"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we will create BMI calculator and do addition, subtraction, multiplication, division, exponentation and modulus
let weight = 80; //in kgs
let height = 2.50; //in meters
let bmi = weight / (height * height);
console.log(`Abdullah, your BMI is ${bmi}`);
let weightOfBox = 50;
let numOfPiecesInBox = 12;
let soldOut = 3;
let weightOfEachPiece = weightOfBox / numOfPiecesInBox;
let remainingPiecesInBox = numOfPiecesInBox - soldOut;
console.log(`The weight of each piece in box is ${weightOfEachPiece}`);
console.log(`the remaining pieces are ${remainingPiecesInBox}`);

import {DifferenceInSecondsOptions} from "date-fns";

let date_ob = new Date();
// console.log(date_ob);

let date = ("0" + date_ob.getDate()).slice(-2);
// console.log(date);


let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// console.log(month);

let year = date_ob.getFullYear();
// console.log(year);

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
console.log();

console.log(`${date}-${month}-${year}`);

console.log();

console.log(`${hours}-${minutes}-${seconds}`);





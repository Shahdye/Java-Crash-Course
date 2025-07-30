let cash = 50;
let price = 40;
let difference = cash - price;
let isStoreOpen = true;

let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(str);

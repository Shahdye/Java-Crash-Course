let cash = 20;
let price = 50;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("you paid exact - have a nice day");
} else {
  console.log(`not enough money - you still owe me ${difference * -1} dollars`);
}

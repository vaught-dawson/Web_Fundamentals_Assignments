function pizzaOven(crustType, sauceType, cheeses, toppings) {
  return {
    crust: crustType,
    sauce: sauceType,
    cheeses: cheeses,
    toppings: toppings,
    toString: function () {
      return `A ${this.crust} pizza with ${
        this.sauce
      } sauce, ${this.cheeses.join(" and ")} cheese, and ${this.toppings.join(
        " and "
      )} on top.`;
    },
  };
}

var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
var pizza3 = pizzaOven(
  "thin",
  "no",
  [
    "blue cheese",
    "goat cheese",
    "brie",
    "feta",
    "mozzarella",
    "camembert",
    "parmesean",
    "gorgenzola",
  ],
  ["a single mushroom"]
);
var pizza4 = pizzaOven("no crust", "no", ["cheddar"], ["everything"]);

// console.log(pizza1.toString());
// console.log(pizza2.toString());
// console.log(pizza3.toString());
// console.log(pizza4.toString());

var crusts = ["thin", "hand tossed", "deep dish", "no crust"];

var sauces = ["traditional", "marinara", "no"];

var cheeses = [
  "cheddar",
  "blue cheese",
  "goat cheese",
  "brie",
  "feta",
  "mozzarella",
  "camembert",
  "parmesean",
  "gorgenzola",
  "no",
];

var toppings = [
  "pineapple",
  "pepperoni",
  "mushrooms",
  "a single mushroom",
  "olives",
  "onions",
  "sausage",
  "anchovies",
  "sweet corn",
  "no",
];

function bakeRandomPizza() {
  var randCrust = chooseRandomItem(crusts);
  var randSauce = chooseRandomItem(sauces);
  var randCheeses = chooseRandomItems(cheeses);
  var randToppings = chooseRandomItems(toppings);

  return pizzaOven(randCrust, randSauce, randCheeses, randToppings);
}

function chooseRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function chooseRandomItems(arr) {
  var randNumOfItems = Math.floor(Math.random() * arr.length);
  var newArr = [];
  for (var i = 0; i <= randNumOfItems; i++) {
    var randIndex = Math.floor(Math.random() * arr.length);
    newArr.push(arr[randIndex]);
    arr.splice(randIndex, 1);
  }
  return newArr;
}

console.log(bakeRandomPizza().toString());

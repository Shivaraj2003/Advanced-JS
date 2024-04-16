const balance = 500;
const phone = 600;

if (phone <= balance) {
	console.log("You have enough money to purchase the item!");
} else {
	console.log("You do not have enough money in your account to purchase this item.");
}

//Ternary operator
console.log('Ternary operator')
let age = 20;

const oldEnough = (age >= 18) ? "You can vote." : "You cannot vote.";

console.log(oldEnough);
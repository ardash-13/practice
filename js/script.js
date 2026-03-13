let firstCard = 2;
let secondCard = 11;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("wohoo! you've got blackjack!");
} else if (sum > 21) {
    console.log("you're out of the game.");
}

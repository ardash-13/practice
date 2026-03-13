let firstCard = 9;
let secondCard = 11;

let sum = firstCard + secondCard;

function cliked() {
    if (sum < 21) {
        alert("do you want to draw a new card?");
    } else if (sum === 21) {
        alert("wohoo! you've got blackjack!");
    } else if (sum > 21) {
        alert("you're out of the game.");
    }
}

alert(sum)
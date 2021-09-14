function message() {
    var message = prompt("Enter your message");
    if(message != null || message != "") {
        document.getElementById('message').innerText = message;
    } else {
        document.getElementById('message').innerText = "You did not enter any message";
    }
}

function calculate() {
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");
    var num3 = prompt("Enter third number");
    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    if(num1 == "" || num1 == null || num2 == "" || num2 == null || num3 == "" || num3 == null) {
        document.getElementById('result').innerText = "There is a missing number.";
    } else {
        document.getElementById('result').innerText = "The sum of the numbers is " + sum + " and the product is " + product;
    }
}

function game() {
    var win = prompt("How many wins?");
    var loss = prompt("How many losses?");
    var draw = prompt("How many draws?");
    var result = win * 3 + loss * 1 + draw * 0;
    if(win == "" || win == null || loss == "" || loss == null || draw == "" || draw == null) {
        document.getElementById('points').innerText = "There is a missing data.";
    } else {
        document.getElementById('points').innerText = "The total points of the game is " + result;
    }
}
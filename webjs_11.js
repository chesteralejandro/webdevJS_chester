var length = 20;
var width = 5;
var height = 15;
var color = "blue";
var shape = "square";
// console.log(length + width + height);
// console.log(width * height);
// console.log(length - width);
// console.log(length % height);
// console.log(color + length);
// console.log(color + shape);
// console.log(color + length + height);
// console.log(width + height + shape);

var num1 = (length % height) + (width * height);
var num2 = (length + width + height) * (length / width);

console.log("The value of num1: " + num1 + " --- The value of num2: " + num2);
if(num1 > num2) {
    console.log("HIGH");
} else {
    console.log("LOW");
}
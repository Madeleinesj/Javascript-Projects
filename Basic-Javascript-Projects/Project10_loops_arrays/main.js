//While loop//
function count_To_Five() {
    var Digit = "";
    var X = 1;
    while (X < 6) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length Property//
let text = "Hi Freya!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

//For Loop//
var Animals = ["Cat", "Dog", "Bird", "Lion", "Tiger", "Rabbit", "Hamster"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {
        Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and document.getelementbyid//
function array_Functions() {
    var cat_pic = [];
    cat_pic[0] = "sleeping";
    cat_pic[1] = "playing";
    cat_pic[2] = "barking";
    document.getElementById("Cat").innerHTML = "In this picture, the dog is " + cat_pic[1] + ".";
}

//Constant //
function constant_function() {
    const Dog = {type:"Border Collie", price:"Free", color:"black"};
    Dog.color = "grey and white";
    Dog.price = "$900";
    document.getElementById("Constant").innerHTML = "The color of the " + Dog.type + " is " + Dog.color;
}

//Let keyword assignment//
var X = 5;
document.getElementById("Let").innerHTML = X;
{
    let X = 3;
    document.getElementById("Let").innerHTML = X;
}
document.getElementById("Let").innerHTML = X;

//Return statement//
let P = add(2, 5);
function add(a, b) {
    return a + b;

}
document.getElementById("addition").innerHTML = P;

//Object//
let car = {
    make: " Hyundai",
    model: " Tuscon",
    color: " Red",
    year: "2017",
    description() {
        return "The car is a " + this.year + this.color + this.make + this.model + ".";
    }
};
document.getElementById("Vroom").innerHTML = car.description();

//Break statement//
let L = "";
for (let i = 0; i < 10; i++) {
    if (i == 8) break;
    L += i + "<br>";
}
document.getElementById("try").innerHTML = L;

//Continue statement//
let O = "";
for (let i = 0; i < 20; i++) {
    if (i === 15) continue;
    O += i + "<br>";
}
document.getElementById("continue").innerHTML = O;
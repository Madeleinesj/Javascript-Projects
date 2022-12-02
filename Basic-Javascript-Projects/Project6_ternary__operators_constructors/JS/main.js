function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 17) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//Example of OOP. Not meant to execute. For future create for PST process//
// erased code from lesson as it was causing errors when rendering using "name"//

Customer cust = new Customer("Brenda Smith");

//Keywords example//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//My keyword example//
function Cat(Breed, Age, Color) {
    this.Cat_Breed = Breed;
    this.Cat_Age = Age;
    this.Cat_Color = Color;
}

var Oreo = new Cat("Calico", 2, "Red, White and Black");
var Scarlett = new Cat("Tabby", 4, "Brown");

function myCats() {
    document.getElementById("New_and_This").innerHTML = "Oreo is a " + Oreo.Cat_Breed + Oreo.Cat_Age + " years old and " + Oreo.Cat_Color;
}

//Nested Functions//
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

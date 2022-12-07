//Global variable will read in function line 3 since it is outside of function//
var X = 2;
function add() {
    document.write(X + 2);
}

//local variable//
function sub() {
    var Y = 3;
    document.write(Y - 1);
}

//Found Y is not defined in console.log//
//had to delete function due to causing error for following function//
function ad() {
    var L = 2;
    console.log(15 + L);
}
function ad_2() {
    console.log(L + 5);
}

//If Statements//

if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
}

//Else statements//

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Vote = "You are old enought to drive!";
    }
    else {
        Vote = "You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else if statements//

function Season_function() {
    var Month = new Date().getMonth();
    var Reply;
    if (Month < 12 == Month > 9) {
        Reply = "It is Autumn time!";
    }
    else if (Month >= 4 == Month < 9) {
        Reply = "It is Spring/Summer time!";
    }
    else {
        Reply = "It is Winter time!.";
    }
    document.getElementById("Time_of_year").innerHTML = Reply;
}


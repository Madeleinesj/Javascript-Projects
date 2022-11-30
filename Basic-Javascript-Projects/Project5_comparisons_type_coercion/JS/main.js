document.write(typeof 3);
document.write("22" + 9);
document.write(2 + 2);
document.write(-2E310);
document.write(2E310);

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

document.write(10<3);

console.log(2 > 2);

document.write(20==20);
document.write(3==4);

X = 20;
Y = 20;
document.write(X === Y);

X = "five";
Y = 2;
document.write(X === Y);

X = "twenty"
Y = 20
document.write(X === Y);

X = 3;
Y = 4;
document.write(X === Y);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 2 && 10 > 4);

document.write(5 > 6 || 1 > 4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}


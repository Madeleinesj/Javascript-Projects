//Concat method//
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//Slice method//
function slice_Method() {
    var Sentence = "All dogs go to heaven.";
    var Section = Sentence.slice(11,21);
    document.getElementById("Slice").innerHTML = Section;
}

//touppercase method//
let text = "Hello, Freya!";
let result = text.toUpperCase();
document.getElementById("demo").innerHTML = result;

//search method//
let part = "I am going to the park."
let position = part.search("going");
document.getElementById("searchmethod").innerHTML = position;

//number Method//
function string_Method() {
    var X = 150;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toprecision method//
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//to fixed method//
let num = 5.56789;
let n = num.toFixed();

document.getElementById("This").innerHTML = n;

//value of method//
let word = new String("Hi Freya");
let words = word.valueOf()

document.getElementById("That").innerHTML = words;
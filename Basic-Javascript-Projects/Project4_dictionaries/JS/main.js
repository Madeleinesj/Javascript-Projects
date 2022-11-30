function my_dictionary() {
    var Cat = {
        Type:"Siberian",
        Color:"Grey",
        Color:"Black",
        Hypoallergenic:"Yes",
        Age:2,
        Sound:"Meow!"
    };
    delete Cat.Sound;
    document.getElementById("Dictionary").innerHTML = Cat.Sound;
}
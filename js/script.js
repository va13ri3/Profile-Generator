var nameBox = document.getElementById("nameInput");
var ageBox = document.getElementById("ageInput");
var favColor = document.getElementById("colorInput");
var favPet = document.getElementsByName("pet");
var hobBy = document.getElementsByClassName("hobby");
var butTon = document.getElementById("submitBtn");
var outPut = document.getElementById("output");
console.log(nameBox);
console.log(ageBox);
console.log(favColor);
console.log(favPet);
console.log(hobBy);
console.log(butTon);
console.log(outPut);

butTon.addEventListener('click', myFunction);

function myFunction() {
    const nameUser = nameInput.value;
    const ageUser = ageInput.value;
    const petUser = favPet.value;
    const hobbyUser = hobBy.value;
    const colorUser = colorInput.options[colorInput.selectedIndex].text;
    outPut.innerHTML = ('Name:') + (' ') + (nameUser) + ('  ') + ('Age:') + (' ') + (ageUser) + ('  ') + ('Favorite Color:') + (' ') + (colorUser) + ('  ') + ('Pet:') + (' ') + (petUser) + ('  ') + ('Hobbies:') + (' ') + (hobbyUser);
}
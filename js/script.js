var nameBox = document.getElementById("nameInput");
var ageBox = document.getElementById("ageInput");
var favColor = document.getElementById("colorInput");
var favPet = document.getElementsByName("pet");
var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
var butTon = document.getElementById("submitBtn");
var outPut = document.getElementById("output");
console.log(nameBox);
console.log(ageBox);
console.log(favColor);
console.log(favPet);
console.log(checkBoxes);
console.log(butTon);
console.log(outPut);

butTon.addEventListener('click', myFunction);

function myFunction() {
    const nameUser = nameInput.value;
    const ageUser = ageInput.value;
    const selectedValue = [];
    for (let i = 0; i < favPet.length; i++) { // for loop -> each radio button(circles) in the collection
            if (favPet[i].checked) { //boolean -> true if the radio button is selected
                selectedValue.push(favPet[i].value); //value of selected button pushed to output
            }

    const checkedValues = [];
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value); //each value of checked checkbox pushed to checkedValues array -> output
        }
});
    const colorUser = colorInput.options[colorInput.selectedIndex].text;
    outPut.innerHTML = ('Name:') + (' ') + (nameUser) + ('<br>') + ('Age:') + (' ') + (ageUser) + ('<br>') + ('Favorite Color:') + (' ') + (colorUser) + ('<br>') + ('Favorite Pet:') + (' ') + (selectedValue) + ('<br>') + ('Hobbies:') + (' ') + (checkedValues);
}
       
    }
    
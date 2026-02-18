const button = document.getElementById("go");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output")

button.addEventListener("click", function() {
    let age = Number(ageInput.value);
    console.log(age);
    if (age > 10) {
        output.innerHTML = "grug";
    }
    else {
        output.innerHTML = "blug";
    }
});

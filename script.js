const button = document.getElementById("go");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output")

button.addEventListener("click", function() {
    let age = Number(ageInput.value);
    console.log(age);
    
    if (age > 99) {
        output.innerHTML = "You need to be old enough to play with LEGOs to use this site, but still, good job on reaching this old age! How was 1926?";
    }
    else if (age >= 50) {
        output.innerHTML = "Over halfway there... muahahahahahahaha";
    }
    else if (age == 42) {
        output.innerHTML = "Please tell me the meaning of life. You're 42, you <em>MUST</em> know it.";
    }
    else if (age <= 25) {
        output.innerHTML = "Your brain is not fully developed, that's not good. Go to <a href=\"https://google.com/\" target=\"_blank\">google.com</a> and get one.";
    }
    else if (age < 3) {
        output.innerHTML = "You need to be old enough to play with LEGOs to use this site. Sorry!";
    }
    else if (isNaN(age)) {
        output.innerHTML = "I... I don't know what to say... you... uh... happy birthday?";
    }
    else {
        output.innerHTML = "You're just an age. Nice.";
    }
});

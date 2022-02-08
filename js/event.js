function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// Handle puple button click by setting funcion name
const purpleButton = document.getElementById("purple-button");
// just set the name of the function without call
purpleButton.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// Handle event using anonymous function
const maroonButton = document.getElementById("maroon-button");
// Anonymous Function
maroonButton.onclick = function() {
    document.body.style.backgroundColor = "maroon";
};

// Handle  by using add evenlistener
const goldenButton = document.getElementById("goldenrod-button");
goldenButton.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}
// Handle by using add eventlistener via anonymous function
const hotPinkButton = document.getElementById("hotpink-button");
hotPinkButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "hotpink";
});
// Handle by using add eventlistener without declaring variable
document
    .getElementById("lightblue-button")
    .addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
    });
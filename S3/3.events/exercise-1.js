let button$ = document.createElement("button");
button$.id = "btnToClick";
button$.textContent = "Click me!";
document.body.appendChild(button$);

button$.addEventListener("click", btnOnClick);

function btnOnClick(e) {
    console.log(e);
}
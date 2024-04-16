let input$ = document.querySelector("input");
input$.addEventListener("focus", showValue);

function showValue() {
    let value = input$.value;
    console.log(value);
}
console.log("Witam wszystkich!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let result = amount / 4.3577;
    resultElement.innerText = result.toFixed(2);
})
    ;
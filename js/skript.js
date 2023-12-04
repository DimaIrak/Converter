console.log("Witam wszystkich!");

{
    const calculateResult = (amount, currency) => {
        const rateGBP = 4.93;
        const rateUSD = 3.90;
        const rateEUR = 4.42;

        switch (currency) {
            case "GBP":
                return amount / currency;

            case "USD":
                return amount / currency;

            case "EUR":
                return amount / currency;
        }
    };
    const updateResultText = (amount, result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = '<strong>${result.toFixed(2)} ${currency}</strong>';
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

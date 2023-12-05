console.log("Witam wszystkich!");

{
    const calculateResult = (amount, currency) => {
        const rateGBP = 5.05;
        const rateUSD = 3.98;
        const rateEUR = 4.33;

        switch (currency) {
            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;
        }
    };
    const updateResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Dostane: <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

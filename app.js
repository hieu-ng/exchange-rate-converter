const currency1 = document.getElementById('currency-one');
const amountCurrency1 = document.getElementById('amount-one');
const currency2 = document.getElementById('currency-two');
const amountCurrency2 = document.getElementById('amount-two');

function convert() {
    const currency_one = amountCurrency1.value();
    const currency_two = amountCurrency2.value();
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
}
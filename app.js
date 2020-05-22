const currency1 = document.getElementById('currency-one');
const amountCurrency1 = document.getElementById('amount-one');
const currency2 = document.getElementById('currency-two');
const amountCurrency2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange range and update the DOM
function convert() {
    const currency_one = amountCurrency1.value();
    const currency_two = amountCurrency2.value();
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText =
                `1 ${currency_one} = ${rate} ${currency_two}`;
            amountCurrency2 = (amountCurrency1 * rate)
                .toFixed(2);
        })
}

// Event listener
currency1.addEventListener('change', convert);
amountCurrency1.addEventListener('input', convert);
currency2.addEventListener('change', convert);
amountCurrency2.addEventListener('input', convert);

convert();

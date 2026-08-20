
const currencySelect = document.querySelector("#currency-select")
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real, Para converter
    const currencyValueConverted = document.querySelector(".currency-value") // Valor CONVERTIDO


    const bitcoinToday = 332078.27
    const dolarToday = 5.20
    const euroToday = 6.00
    const libraToday = 7.05

    console.log(currencySelect.value)



    if (currencySelect.value == "bitcoin") {

        currencyValueConverted.innerHTML = "₿ " + new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)






}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = " Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = " Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }


    
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



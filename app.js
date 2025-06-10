let baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
let selectLeft = document.querySelector(".select-left");
let selectRight = document.querySelector(".select-right");
let imgLeft = document.querySelector(".img-left");
let imgRight = document.querySelector(".img-right");
let conversionText = document.querySelector(".conversion-rate");
let valueInput = document.querySelector(".value-input");

//
for (currCode in countryList) {
    let optionLeft = document.createElement("option");
    let optionRight = document.createElement("option");
    optionLeft.value = optionLeft.innerText = currCode;
    optionRight.value = optionRight.innerText = currCode;
    selectLeft.append(optionLeft);
    selectRight.append(optionRight);
}

//
imgLeft.src = `https://flagsapi.com/${countryList[selectLeft.value]}/flat/64.png`;
imgRight.src = `https://flagsapi.com/${countryList[selectRight.value]}/flat/64.png`;

//
function flagUpdate(event) {
    let currencyCode = event.target.value;
    let countryCode = countryList[currencyCode];
    
    if (event.target == selectLeft) {
        imgLeft.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    } else {
        imgRight.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
    
    updateConversion(); 
}

selectLeft.addEventListener("change", flagUpdate);
selectRight.addEventListener("change", flagUpdate);

//Main conversion function
async function updateConversion() {
   
    let amount = valueInput.value || 1
    let fromCurrency = selectLeft.value.toLowerCase();
    let toCurrency = selectRight.value.toLowerCase();
    
  
    baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;
    
    try {
      
        const response = await fetch(baseURL);
        const data = await response.json();
        
       
        const rateRight = data[fromCurrency][toCurrency];
        const convertedAmount = (amount * rateRight);
      
        conversionText.innerText = `${amount} ${selectLeft.value} = ${convertedAmount} ${selectRight.value}`;
    } catch (error) {
        console.error("Cannot fetch data:", error);
        conversionText.innerText = "Error fetching conversion rates";
    }
}


valueInput.addEventListener("input", updateConversion);

updateConversion();


selectLeft.addEventListener("change", updateConversion);
selectRight.addEventListener("change", updateConversion);

document.querySelector("button").addEventListener("click", updateConversion);
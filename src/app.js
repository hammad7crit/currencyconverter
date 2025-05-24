const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

let selectFormLeft = document.querySelector(".select-from"); //the options
let selectFormRight = document.querySelector(".select-to");
let imgAPI = document.querySelector(".img-from");
let imgAPIRight = document.querySelector(".img-to")

//This is for selectForm-From
const optionAttacherLeft = () => {
    for (let currCode in countryList) {
        let newOptionLeft = document.createElement("option");
        newOptionLeft.value = currCode;
        newOptionLeft.text = currCode;
        selectFormLeft.append(newOptionLeft);
        // console.log("New Option: ",newOption);
        // console.log("currCode: ", countryList[currCode])
    }
};   

optionAttacherLeft();

let previousValue = selectFormLeft.value;
let currValues = Object.values(countryList)



selectFormLeft.addEventListener("change", (event) => {
    //THis gets the country value eg USD :
    let currKey = event.target.value;
    let currValue = countryList[currKey];
    // console.log("Value: ", currValue);
    imgAPI.src = `https://flagsapi.com/${currValue}/flat/64.png`;
})




//now select-to-form (RIGHT PART)
const optionAttacherRight = () => {
    for (let currCodeRight in countryList) {
        let newOptionRight = document.createElement("option");
        newOptionRight.value = currCodeRight;
        newOptionRight.text = currCodeRight;
        selectFormRight.append(newOptionRight);
        // console.log("New Option: ",newOption);
        // console.log("currCode: ", countryList[currCode])
    }
};

optionAttacherRight();

let previousValueRight = selectFormRight.value;
let currValuesRight = Object.values(countryList)



selectFormRight.addEventListener("change", (event) => {
    //THis gets the country value eg USD : US 
    let currKeyRight = event.target.value;
    let currValueRight = countryList[currKeyRight];
    // console.log("Value: ", currValue);
    imgAPIRight.src = `https://flagsapi.com/${currValueRight}/flat/64.png`;
})

//currCode is the 2 word while newOption is the 3 word currency.
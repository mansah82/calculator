const numbers = document.getElementsByClassName("calculatorNumber");
const result = document.getElementById("result");
const signs = document.getElementsByClassName("calcSign");
let firstInput = true;
const resultsList  = document.getElementById("results");

// for(let i=0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click" , function() {
//         console.log("tryck")
//     })
// }

// Array.from(numbers).forEach((number => {
//     number.addEventListener("click", function() {
//             console.log("tryck")
//     })
// }));


for(const number of numbers ) {
    number.addEventListener("click", function() {
        buttonListener(number);
    })
}

for(const sign of signs ) {
    sign.addEventListener("click", function() {
        buttonListener(sign);
    })
}


function clearResult() {
    result.innerText = "";
}

function display(value) {
    if(firstInput) {
        clearResult();
        firstInput = false;
    }
    result.innerText += value;
}


function buttonListener(button) {
    if(button.innerText == "=") {
        calculate();
    }else {
        display(button.innerText);

    }
}

function calculate() {
    let res = eval(result.innerText);
    display("=" + res);
    firstInput = true;
    displayResults(result.innerText)
}

function displayResults(value) {
    const listItem = document.createElement("li");
    listItem.innerText = value;
    resultsList.appendChild(listItem)

}
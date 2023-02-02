'use strict';
const billEntered = document.querySelector('.bill-tip');
// bill percent input

// tip selection
const tipPercent = [5, 10, 15, 25];
const customTip = document.querySelector('.custom-tip-input');

// amount of people
const amountOfPeeps = document.querySelector('.peeps');

// calculation function
const tipCalculator = function(percent, amount) {
    return (percent / 100) * amount;
}

// per person tip displayed here
const tipAmount = document.querySelector('.tip-digit');

let maroon = document.querySelector('.five').value;

// submit button performance
document.querySelector('.sub-btn').addEventListener('click', function() {
    const tipOff = tipCalculator(tipPercent[0], Number(billEntered.value));
    tipAmount.textContent = tipOff
})

// let maroon = document.querySelector('.five');
// console.log();




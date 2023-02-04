'use strict';
const billEntered = document.querySelector('.bill-tip');
// bill percent input

// tip input
const customTip = document.querySelector('.custom-tip-input');

// amount of people
const amountOfPeeps = document.querySelector('.peeps');

// calculation function
const tipCalculator = function(percent, amount) {
    return percent / 100 * amount;
}
// tip calculation function
const tipCalculatorTwo = function(per, cash){
    return per / 100 * cash
}

// tip paid per person displayed here
const tipAmountPerPerson = document.querySelector('.tip-digit');

// tip paid per person displayed here
const person = document.querySelector('.person-tip-digit');

// choose amount of people
const notify = document.querySelector('.alert');

// notification field when number of people is zero
const notifyBorder = document.querySelector('.field')

const noticeStyle = function(){
    person.textContent = 0;
    notify.classList.add('show-alert')
    amountOfPeeps.style.border = '#ef233c 1.50px solid'
    amountOfPeeps.style.borderRadius = '5px'
}

const noticeDeactivation = function(){
    amountOfPeeps.style.border = 'none'
    amountOfPeeps.style.borderRadius = '5px'
    notify.classList.remove('show-alert')
}


document.querySelector('.five').addEventListener('click', function(){
    const fivePercent = 5;
    // total tip paid
    const tipCash = tipCalculator(fivePercent, Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

     // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), fivePercent)
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    } else {
        noticeDeactivation()
    }
})

document.querySelector('.ten').addEventListener('click', function(){
    const tenPercent = 10;
    // total tip paid
    const tipCash = tipCalculator(tenPercent, Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

    // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), tenPercent)
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    } else {
        noticeDeactivation()
    }
})

document.querySelector('.fifteen').addEventListener('click', function(){
    const fifteenPercent = 15;
    // total tip paid
    const tipCash = tipCalculator(fifteenPercent, Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

    // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), fifteenPercent)
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    } else {
        noticeDeactivation()
    }
})

document.querySelector('.twentyfive').addEventListener('click', function(){
    const twentyFivePercent = 25;
    // total tip paid
    const tipCash = tipCalculator(twentyFivePercent, Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

    // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), twentyFivePercent)
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    } else {
        noticeDeactivation()
    }
})

document.querySelector('.fifty').addEventListener('click', function(){
    const fiftyPercent = 50;
    // total tip paid
    const tipCash = tipCalculator(fiftyPercent, Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

    // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), fiftyPercent)
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    }else {
        noticeDeactivation()
    }
})

const customInput = document.querySelector('.custom-tip-input')
customInput.addEventListener('input', function(){
    // total tip paid
    const tipCash = tipCalculator(Number(customInput.value), Number(billEntered.value));
    tipAmountPerPerson.textContent = Math.ceil(tipCash)

    // Tip per person calculation
    const tipPerPerson = tipCalculatorTwo(Number(billEntered.value) / Number(amountOfPeeps.value), Number(customInput.value))
    person.textContent = Math.ceil(tipPerPerson)

    // alert
    if (Number(amountOfPeeps.value) === 0) {
        noticeStyle()
    }
})



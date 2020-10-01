const upperCheck = document.querySelector('#upperLetters')
const lowerCheck = document.querySelector('#lowerLetters')
const symbolCheck = document.querySelector('#symbols')
const numberCheck = document.querySelector('#numbers')
const length = document.querySelector('#length')
const makeButton = document.querySelector('#makeButton')
const boxResult = document.querySelector('#passwordBox')

const verificationCheckBox = () => {
    let oneIsChecked = false
    
    if (upperCheck.checked === true
        || lowerCheck.checked === true
        || symbolCheck.checked === true
        || numberCheck.checked === true){
            oneIsChecked = true
        }

    return oneIsChecked
}

const insertValuesInArray = (arr) => {
    if (upperCheck.checked === true) {
        for (let i = 0; i < upper.length; i++) {
            arr.push(upper[i])
        }
    }

    if (lowerCheck.checked === true) {
        for (let i = 0; i < lower.length; i++) {
            arr.push(lower[i])
        }
    }

    if (symbolCheck.checked === true) {
        for (let i = 0; i < symbols.length; i++) {
            arr.push(symbols[i])
        }
    }

    if (numberCheck.checked === true) {
        for (let i = 0; i < number.length; i++) {
            arr.push(number[i])
        }
    }
}

const createPass = (arr) => {
    let passLen = length.value
    let arrLen = arr.length-1
    let password = ''
    for (let i = 0; i < passLen; i++) {
        password += arr[Math.round(Math.random()*arrLen)]
    }

    return password
}

makeButton.addEventListener('click', () => {
    let arrMakePass = []

    if (verificationCheckBox()){
        insertValuesInArray(arrMakePass)  
        let result = createPass(arrMakePass)
        boxResult.innerHTML = ''
        const span = document.createElement('span')
        span.innerText = result
        boxResult.appendChild(span)
    }

})




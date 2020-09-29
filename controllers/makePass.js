const upperCheck = document.querySelector('#upperLetters')
const lowerCheck = document.querySelector('#lowerLetters')
const symbolCheck = document.querySelector('#symbols')
const numberCheck = document.querySelector('#numbers')
const length = document.querySelector('#length')
const makeButton = document.querySelector('#makeButton')
const boxResult = document.querySelector('#passwordBox')

let finalPass = ''



makeButton.addEventListener('click', () => {
    let arrMakePass = []

    if (upperCheck.checked === true) {
        for (let i = 0; i < upper.length; i++) {
            arrMakePass.push(upper[i])
        }
    }

    if (lowerCheck.checked === true) {
        for (let i = 0; i < lower.length; i++) {
            arrMakePass.push(lower[i])
        }
    }

    if (symbolCheck.checked === true) {
        for (let i = 0; i < symbols.length; i++) {
            arrMakePass.push(symbols[i])
        }
    }

    if (numberCheck.checked === true) {
        for (let i = 0; i < number.length; i++) {
            arrMakePass.push(number[i])
        }
    }

    // console.log(arrMakePass)
    

})


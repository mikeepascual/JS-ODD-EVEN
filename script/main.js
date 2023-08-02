const displayRes = document.getElementById ("displayRes");
const inputNumber= document.getElementById ("inputNumber");

function find(x) {
    return x == '.'
}

function checkOddEven() {
    let num = inputNumber.value
    if (Array.from(num.toString()).find(find)) {
        displayRes.innerHTML = "OOPPS Invalid"
    }
    else if (num % 2 === 0 && num !== '') {
        displayRes.innerHTML = "EVEN"
    }
    else if (num % 2 > 0 && num !== '') {
        displayRes.innerHTML = "ODD"
    }
    else {
        displayRes.innerHTML = "Input Number"
    }
}
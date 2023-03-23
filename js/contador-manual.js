let screenNum = document.querySelector('.screen')
let counter = 0

function lowerClick() {
    let lowerBtn = document.querySelector('.lower-btn')
    lowerBtn.classList.add('clique')
    setTimeout(function() {
        lowerBtn.classList.remove('clique')
    }, 150)

    screenNum.innerText = --counter
}

function upperClick() {
    let upperBtn = document.querySelector('.upper-btn')
    upperBtn.classList.add('clique')
    setTimeout(function() {
        upperBtn.classList.remove('clique')
    }, 150)

    screenNum.innerText = ++counter
}

function clearClick() {
    let clearBtn = document.querySelector('.clear-btn')
        clearBtn.classList.add('clique')
    setTimeout(function() {
        clearBtn.classList.remove('clique')
    }, 150)

    counter = 0
    screenNum.innerText = counter
}
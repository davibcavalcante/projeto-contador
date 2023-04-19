let numInicio = document.querySelector('#num-inicio')
let numFinal = document.querySelector('#num-final')
let numPulo = document.querySelector('#num-pulo')
let saida = document.querySelector('.saida')

function validaContagem(inicio, final, pulo) {
    if (inicio.value.length == 0 || final.value.length == 0) {
        saida.innerText = 'Preencha os valores de início e final para iniciar a contagem'
    } else if (inicio.value == final.value) {
        saida.innerText = 'Os números de início e final não podem ser iguais'
    } else if (pulo.value < 1) {
        saida.innerText = 'O pulo não pode ser menor do que 1'
    } else {
        return verificaResposta(true)
    }
}

function pegaDados() {
    validaContagem(numInicio, numFinal, numPulo)
}

function verificaResposta(resposta) {
    if (resposta == true) {
        contar()     
    }
}

function contar() {
    let nInicio = Number(numInicio.value)
    let nFinal = Number(numFinal.value)
    let nPulo = Number(numPulo.value)
    saida.innerHTML = null
    if (nInicio < nFinal) {
        while (nInicio <= nFinal) {
            if (nInicio < 10) {
                saida.innerHTML += `0${nInicio}  `
                nInicio += nPulo
            } else {
                saida.innerHTML += `${nInicio}  `
                nInicio += nPulo
            }
        }
    } else {
        while (nInicio >= nFinal) {
            if (nInicio < 10) {
                saida.innerHTML += `0${nInicio}  `
                nInicio -= nPulo
            } else {
                saida.innerHTML += `${nInicio}  `
                nInicio -= nPulo
            }
        }
    }
}

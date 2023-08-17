var A = []
var B = []
var num1, num2
var y = []
var identificador = true
var operador = ""
var result = 0
var cliquePonto = false
var tema = false
var limitador = 8
var rad = false

document.body.onload(estilo())

function modo(){
    var divCalculadora = document.querySelector("#calc")
    var divCientifica = document.querySelector("#cient")
    
    if (divCalculadora.classList.contains("calculadora") && divCientifica.classList.contains("cientificaOFF")){
        divCalculadora.classList.remove("calculadora")
        divCientifica.classList.remove("cientificaOFF")
        divCalculadora.classList.add("cientifica")
        divCientifica.classList.add("cientificaON")
    } else {
        divCalculadora.classList.remove("cientifica")
        divCientifica.classList.remove("cientificaON")
        divCalculadora.classList.add("calculadora")
        divCientifica.classList.add("cientificaOFF")
    }
    trocaTipo()
}
function verifica(){
    if (identificador==true){
        y = A
    }
    else{
        y = B
    }
}
function exibe(fator){
    verifica()
    document.querySelector("#tela").textContent = parseFloat(fator.join(""))
}
function trocaTipo(){
    var botaoDeg = document.querySelector("#botaoDeg")
    var tipo = document.querySelector("#tipo")
    if(rad == true){
        rad = false
        tipo.textContent = "DEG"
        botaoDeg.textContent = "Rad"
    }else{
        rad = true
        tipo.textContent = "RAD"
        botaoDeg.textContent = "Deg"
    }
}
function tipo(){
    if (rad == false && (operador == 10 || operador == 11 || operador == 12)){
        num1 = (num1 * Math.PI) /180
    }
}
function estilo(){
    var botaoLuz = document.querySelector("#botaoLuz")
    if(tema == false){
        document.body.style.backgroundColor = "#121212"
        tema = true
        botaoLuz.style = 'background-image: url("images/sol.svg")'
        botaoLuz.classList.remove("itemPI")
        botaoLuz.classList.add("itemP")
    } else{
        document.body.style.backgroundColor = "#ffffff"
        tema = false
        botaoLuz.style = 'background-image: url("images/lua.svg")'
        botaoLuz.classList.remove("itemP")
        botaoLuz.classList.add("itemPI")
    }
}
function addNum(num){
    verifica()
    if (y.length <8 ){
         y.push(num)
    }
    exibe(y)
}
function ponto(){
    verifica()
    if (cliquePonto == false){
        y.push(".")
        cliquePonto = true
    }    
}

function operacao(aux){
    identificador = false
    cliquePonto = false
    operador = aux.toString()
    if( aux == 5 || aux == 6 || aux == 8 || aux == 10 || aux == 11 || aux == 12){
        igual()
    }
}
function verificaPonto(){
    verifica()
    if(y.lastIndexOf(".") > 0){
        cliquePonto = false
    }
}
function igual(){
    
    num1 = parseFloat(A.join(""))
    num2 = parseFloat(B.join(""))
    
    if (A.length == 0){
        num1 = result
    }
    if (B.length == 0){
        num2 = 0
    }

    tipo()

    switch (operador) {
        case '1':
            result = num1 + num2
            break
        case '2':
            result = num1 - num2
            break
        case '3':
            result = num1 * num2
            break 
        case '4':
            if( num2 == 0){
                result = "Indeterminação" 
            }else{
                result = num1 / num2
            }
            break 
        case '5':
            result = Math.sqrt(num1) 
            break 
        case '6':
            result = num1**2
            break 
        case '7':
            result = (num1 * num2) / 100
            break 
        case '8':
            result = Math.log(num1)
            break
        case '9':
            result = num1**num2
            break
        case '10':
            result = Math.tan(num1)
            break
        case '11':
            result = Math.cos(num1)
            break
        case '12':
            result = Math.sin(num1)
            break

            
    }          
    document.querySelector("#tela").textContent = parseFloat(result.toFixed(limitador))
    identificador = true
    A = []
    B = []
    cliquePonto = false
}
function cleanElement(){
    verifica()
    if (y.length == 1){
        y.splice(0,1,0)
    }else if(y.length == 0){
        y.push(0)
    } else{
        y.pop()
    }
    verificaPonto()
    exibe(y)
}
function cleanAll(){
    verifica()
    identificador = true
    A = []
    B = []
    cleanElement()
    exibe(y)
}

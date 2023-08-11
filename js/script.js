var A = []
var B = []
var y = []
var identificador = true
var operador = ""
var result = 0
var cliquePonto = false
var tema = false

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
function estilo(){
    if(tema == false){
        document.body.style.backgroundColor = "#121212"
        tema = true
    } else{
        document.body.style.backgroundColor = "#ffffff"
        tema = false
    }
}
function addNum(num){
    verifica()
    y.push(num)
    exibe(y)
}
function ponto(){
    verifica()
    if (cliquePonto == false){
        y.push(".")
        cliquePonto = true
    }    
    console.log(cliquePonto)
}
function operacao(aux){
    identificador = false
    cliquePonto = false
    operador = aux.toString()
    if( aux == 5 || aux == 6){
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
    
    var num1 = parseFloat(A.join(""))
    var num2 = parseFloat(B.join(""))
    
    if (A.length == 0){
        num1 = result
    }
    if (B.length == 0){
        num2 = 0
    }

    console.log(num1)
    switch (operador) {
        case '1':
            result = num1 + num2
            break;
        case '2':
            result = num1 - num2
            break; 
        case '3':
            result = num1 * num2
            break; 
        case '4':
            if( num2 == 0){
                result = "Indeterminação" 
            }else{
                result = num1 / num2
            }
            break;  
        case '5':
            result = Math.sqrt(num1) 
            break;  
        case '6':
            result = num1**2
            break;  
        case '7':
            result = (num1 * num2) / 100
            break;  
    }          
    document.querySelector("#tela").textContent = result
    identificador = true
    A = []
    B = []
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
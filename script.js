//Exercicios do topico 3

function isExactlyTrue(value) {
    return value === true;
}

// Exemplos de uso:
console.log(isExactlyTrue(true));         // true
console.log(isExactlyTrue(false));        // false
console.log(isExactlyTrue(1));            // false
console.log(isExactlyTrue('true'));       // false
console.log(isExactlyTrue(''));           // false
console.log(isExactlyTrue(null));         // false
console.log(isExactlyTrue(undefined));    // false



function retornarperimetroquadrado(lado) {
    return lado * 4;
}
var resultado = retornarperimetroquadrado;   //perimetro
console.log(resultado(2));



function retornarnomesobrenome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;                        //nome e sobrenome
}
var imprimirnome = retornarnomesobrenome;
console.log(imprimirnome('Vinicius', 'Reis Zimmermann'));



function verificarPar(numero) {
    if (numero % 2 == 0) {
        return true;
    // } else {                        //verificação de numero par
        return false;
    }
}
var num1=verificarPar;
console.log(num1(2));


function tipoDeDado(verificar){
    return typeof verificar;
}
console.log(tipoDeDado(42));            // "number"
console.log(tipoDeDado("Hello"));       // "string"
console.log(tipoDeDado(true));          // "boolean"
console.log(tipoDeDado({}));            // "object"
console.log(tipoDeDado([]));            // "object" 
console.log(tipoDeDado(null));          // "object" 
console.log(tipoDeDado(function() {})); // "function"
console.log(tipoDeDado(undefined));     // "undefined"


function mostrarNome(){
    console.log("Vinicius Reis Zimmermann");
}

addEventListener('click',mostrarNome);

//OU
addEventListener('click',()=>{
     console.log("Vinicius Reis Zimmermann");
});
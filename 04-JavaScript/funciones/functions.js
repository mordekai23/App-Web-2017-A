/**
 * Created by USRDEL on 22/5/17.
 */

function ImprimirHolaMundo() {
    console.log("Hola Mundo");
}

ImprimirHolaMundo();
//void undefined
function Imprimir(texto) {
    console.log(texto);
}

Imprimir("Danilo");

function Suma2Numeros(a,b) {
    return a+b;
}
console.log(Suma2Numeros(1,2));

function Operar2Numeros(n1,n2,funcion) {
    n1 = n1+1;
    n2 = n2+2;
    funcion(n1,n2);
}

Operar2Numeros(2,4,function (primerNumero,segundoNumero) {
    //primerNumero = 3
    //segundoNumero = 6
    return primerNumero*segundoNumero; //3*6 = 18
})









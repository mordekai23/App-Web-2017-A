/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [2, 8, 9, 7, 3, 5, 7, 9];
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor < 5);
});
console.log(resultado2);

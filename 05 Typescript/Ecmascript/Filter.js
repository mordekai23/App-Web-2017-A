/**
 * Created by USRDEL on 3/6/17.
 */
//FILTER
var arreglo = [
    {
        nombre: "Danilo",
        apellido: "Nieto",
        nota: 8,
        id: 1
    },
    {
        nombre: "Henry",
        apellido: "Nieto",
        nota: 3,
        id: 2
    },
    {
        nombre: "Daniel",
        apellido: "Fry",
        nota: 10,
        id: 3
    },
    {
        nombre: "Andres",
        apellido: "Paredes",
        nota: 7,
        id: 4
    },
    {
        nombre: "May",
        apellido: "Ross",
        nota: 6,
        id: 5
    },
];
var resultado = arreglo.filter(function (valor, indice, arreglo) {
    return valor.nota < 7;
});
console.log(resultado);

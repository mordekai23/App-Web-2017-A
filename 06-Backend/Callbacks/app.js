/**
 * Created by USRDEL on 3/6/17.
 */
//1 nombre y ruta del archivo
//2


const  fs = require('fs');

//const express = require('express');
//npm install twj-a-nieto
const express = require('twj-a-nieto');

const passwords = require('machinepack-passwords');

let passwordAEncriptar = "1234";

passwords.encryptPassword({
    password: passwordAEncriptar,
})
    .exec({
        error: (error)=> {
            console.log(`Error: ${error}`);

        },
        success: (resultado)=>{
            console.log(`Resultado: ${resultado}`)

        }
    });

console.log("Empieza");

fs.readFile('texto.txt', 'utf8', function (err,data) {
    if (err) throw err;
console.log(data);
});





let a=2,
    b=3,
    resultado;

//resultado = calculadora.calculadoraUdla()



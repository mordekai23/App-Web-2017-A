/**
 * Created by USRDEL on 22/5/17.
 */

var texto = "";
var texto2 = '';
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};

texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;

//Comentario en linea

/*
hola
comentarios
 */

//Arreglos

var arregloNumeros = [1,2,3,4,5];
var arregloStrings =["a","b","c"];
var arregloBooleanos = [true,false,true];

arregloNumeros = [1,"a",true,[1,"b"],{}];

var matriz = [[1,2],[3,4]];
//0 0 = 1
//0 1 = 2
//1 0 = 3

//Objeto JSON

var objetoNotacion = {};

var objeto2 = {
    llave:"valor",
    llave2:"valor",
    llave3:"valor"
};

objeto2.llave
objeto2.llave2
objeto2.llave3

var objetoComplejo = {
    nombre:"",
    apellido:"",
    fechaNacimiento: new Date(),
    mayorEdad:true,
    peso:70.2,
    altura:178,
    titulo:"",
    saltar:function () {
        console.log("Saltar");
    },
    correr: function () {
        console.log("Correr");
    },
    sumar:function (a,b) {
        return a+b;
    },
    imprimirNOmbre: function () {
        //return objetoComplejo.nombre + " " + objetoComplejo.apellido;
        return this.nombre + " " + this.apellido;
    }
};

objetoComplejo.altura;
objetoComplejo.apellido;
objetoComplejo.nombre;

objetoComplejo.nombre = "Danilo";
objetoComplejo.nombre;

objetoComplejo.titulo =  "Inge";

delete objetoComplejo.nombre;

var arregloString = ["1","2"];

arregloString.push("3"); //se agrega al final
arregloString.pop(); //se borra el ultimo
arregloString.splice(0,1,"3");
console.log(arregloString);






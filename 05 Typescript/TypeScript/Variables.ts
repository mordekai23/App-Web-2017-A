/**
 * Created by USRDEL on 3/6/17.
 */

let numero:number = 2;

//nombreVariable:tipoVariable

//numero = "danilo"; No se puede guardar tipos de datos string en numbers
numero =18;

let verdad:boolean = true;
//verdad=0;
//no podemos igualara a un elemento q no sea booleano

verdad = null;
verdad = undefined;
verdad = false;

let nombre: string = "dan";
nombre = `Yo no soy ${verdad};
`
let arregloNumeros1:number[] = [1,2];

let arregloNumeros2:Array <number> = [1,2];

interface UsuarioInt{
    nombre: string,
    apellido: string,
    nota:number,
    id:number
}

let danilo:UsuarioInt = {
    nombre:"Danilo",
    apellido:"Nieto",
    nota:8,
    id:5
}

let juego = {}
  let  juego:any = 2;
    //juego = "Nombre";
    //juego = {}

const amigo = "Amigo";
const numero = 2;
numero = 24;
amigo = "Referencedum";






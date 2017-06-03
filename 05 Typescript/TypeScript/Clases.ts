/**
 * Created by USRDEL on 3/6/17.
 */



class usuarioClass {
    /*public nombre:string = "Danilo";
    private apellido?:string;*/

    constructor(public nombre:string,
    private apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    ImprimirNodo(saludo:string,titulo?:string): string{
        return` ${saludo} ${titulo} 
        ${this.nombre} ${this.apellido}`;
    }
}


let danilo:usuarioClass = new usuarioClass("Danilo","Nieto")

console.log(danilo.ImprimirNodo("hi","Sr."))














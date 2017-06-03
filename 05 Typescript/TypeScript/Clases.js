/**
 * Created by USRDEL on 3/6/17.
 */
var usuarioClass = (function () {
    function usuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    usuarioClass.prototype.ImprimirNodo = function (saludo, titulo) {
        return " " + saludo + " " + titulo + " " + this.nombre + " " + this.apellido;
    };
    return usuarioClass;
}());
var danilo = new usuarioClass("Danilo", "Nieto");
console.log(danilo.ImprimirNodo("hi", "Sr."));

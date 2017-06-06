/**
 * Created by USRDEL on 29/5/17.
 */

let arreglo = [2,8,9,7,3,5,7,9];

let resultado = arreglo.every(
    (valor,indice,arreglo)=>{
        return (valor<4);
    }

);

let resultado2 = arreglo.map(
    valor,indice,arreglo)=>{
    return (valor*2)/10;
})
.some(
    (valor)=>
)


console.log(resultado);





















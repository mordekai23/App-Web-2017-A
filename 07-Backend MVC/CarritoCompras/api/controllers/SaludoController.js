/**
 * Created by Gabriela on 19/06/2017.
 */
var hola;
declare var module;
declare var sails;
declare var Usuario;

// /Saludo/crear


module.exports = {
    wellcome: function (req, res) {
        //post
        if (req.method == "POST") {
            //req.method; //Metodo; Get Post Put Delete
            //response.json({saludo:"hola"})
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    bienvenido: function (req, res) {
        return res.send("Hola");
    }

    crearUsuarioQuemado:(req,res)=>{

      let nuevoUsuario = {
        nombre: "Danilo",
        apellidos:"Nieto",
        password:"1234",
        correo:"a@j.com"
        fechaNacimiento: new Date()
      }



      Usuario.create(nuevoUsuario)
          .exec(
          (error,usuarioCreado)=>{
            if(error){
              return res.serverError(error);
            }else{
              return res.ok(usuarioCreado);
            }
          }
        )
  }

};

/**
 * Created by Gabriela on 19/06/2017.
 */
let hola;

declare var module

module.exports = {

  wellcome: (req, res) => {
    //post
    if (req.method == "POST") {
      //req.method; //Metodo; Get Post Put Delete
      //response.json({saludo:"hola"})
      return res.json({saludo: "hola"});
    } else {
      return res.send("Error")
    }

  },

  bienvenido: (req, res) => {
    return res.send("Hola")
  }
}



}

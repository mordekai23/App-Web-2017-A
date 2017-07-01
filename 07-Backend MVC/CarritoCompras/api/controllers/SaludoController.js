/**
 * Created by Gabriela on 19/06/2017.
 */
var hola;
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
};
//# sourceMappingURL=SaludoController.js.map
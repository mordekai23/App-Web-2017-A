
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


app.post('/informacion', function (req, res) {
    fs.readFile('Informacion.txt', 'utf8',
        (err, data) => {
        if (err) throw err;
    res.send(data)
    });
})

app.get('/facultaddesistemas', function (req, res) {
    res.send('Facultad de Sistemas')
})

app.get('/cabeceras', function (req, res) {

    res.append('nombre-cabecera','valor de la cabecera');
    res.append('fecha: FechaServidor',new Date());
    res.append('metodo: metodo-del-request',req.method);
    res.append('dirección-ip: ip-del-request',req.ip);
    res.append('url-original: url-del-request',req.originalUrl);
    res.append('protocolo: protocolo-del-request',req.protocol);

})
//cookies
app.get('/setcookie', function (req, res) {

    res.cookie("nombre-cookie","nieto:24");
    res.send("Cookie seteada")
    console.log("cookie")
})

app.get('/clearcookie', function (req, res) {

    res.cookie("nombre-cookie","nieto:24");
    res.send("Cookie seteada")
    console.log("cookie")
})


////////DEBER

app.get('/reqaccepted ', function (req, res) {

    [ { value: 'application/json',
        quality: 1,
        type: 'application',
        subtype: 'json' },
        { value: 'text/html',
            quality: 0.5,
            type: 'text',
            subtype: 'html' } ]

})









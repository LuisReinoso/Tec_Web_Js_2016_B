/** importacion **/
var express = require('express')
var app = express()

var fs = require("fs");
var fs2 = require("fs");

var quePasa= '';
console.log(quePasa = 'esta por leer el archivo')

fs.readFile('./paginas/pagina.html', 
            'utf8', 
            function(err, archivoLeido) {
    
    
    //console.log(error);
    console.log(archivoLeido);
    
});

console.log(quePasa = 'termino de leer el archivo')


app.get('/', function(req, res) {
    
    var datos;
    console.log("1 antes de leer")
    
    fs.readFile('./paginas/pagina.html', 
            'utf8', 
            function(err, archivoLeido2) {
                //console.log(error);
                console.log(archivoLeido2);
        
                fs.readFile('./paginas/usuario.html', 
                    'utf8', 
                    function(err, archivoLeido1) {
                        //console.log(error);
                        console.log(archivoLeido1);
                        res.send(archivoLeido1 +archivoLeido2);
                });
    });
    
    console.log("2 parece que termino de leer")
})

app.listen(5050, function () {
    console.log('Example app listening on port 5050!')
})
    
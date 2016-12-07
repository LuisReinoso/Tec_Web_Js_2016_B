/** importacion **/
var express = require('express')
var app = express()

var fs = require("fs");

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
    
    console.log("1 antes de leer")
    fs.readFile('./paginas/pagina.html', 
            'utf8', 
            function(err, archivoLeido) {
    console.log(error);
    console.log(archivoLeido);
        res.send(archivoLeido);
    });
    console.log("2 parece que termino de leer")
})

app.listen(5050, function () {
    console.log('Example app listening on port 5050!')
})
    
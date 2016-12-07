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



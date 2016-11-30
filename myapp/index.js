/** importacion **/
var express = require('express')
var app = express()

    /** nuevo **/
    
var contador = 3;

    var usuarios = [
        {
            id:1,
            nombre:"juan",
            cedula:"21818784"
        },
        {
            id:2,
            nombre:'mar',
            cedula:'218118784'
        },
        {
            id:3,
            nombre:'limar',
            cedula:'21118784'
        }
    ]

app.get('/datos/:idUsuario', function(req, res) {
        
        for (i=0; i<3; i++) {
            
            console.log(usuarios[i].id);
            
            if (req.params.idUsuario == usuarios[i]) {
                console.log("usuario encontrado");
            } else {
                app.send ("no encontrado");
            }
        }
    });


/** todos los usuarios **/
app.get('/usuarios', function(req, res) {
    app.json({"nombre":"luis"});
    app.send();           
})
    


app.get('/TecnologiasWeb', function (req, res) {

    /** request **/
    console.log("lo que tengo en el request:");
    console.log(req);

    console.log("lo que tengo en el res:");
    //res.send('Hello World!');

    /** cabeceras **/
    console.log("cabecera request:");
    console.log(req.headers);
    
    console.log("cabecera response:");
    console.log(res.headers);
    
    /** responder en cabecera **/
    res.json({"nombre":"luis"});
    
    /** cabeceras token **/
    res.headers = {"apellido":"reinoso"}
    
    console.log("cabecera response:");
    console.log(res.headers);
    
    /** cabeceras en el campo de cabeceras
    verificar **/
    req.append = ('clave', 'valor');
    res.send();
    
    /** leer parametros nombre=pe&apellido=s verificar **/
    console.log("parametros enviados");
    var parametros = req.params;
    console.log(parametros);
    

})

/** get resquest **/
app.get('/get', function (req, res) {
    res.send('TecnologiasWeb get')
})

/** post resquest **/
app.post('/', function (req, res) {
    res.send('TecnologiaWeb post')
})

app.listen(5050, function () {
    console.log('Example app listening on port 5050!')
})


/** post resquest **/
app.post('/user', function (req, res) {
    
    console.log(req.query.nombre);
    console.log(req.query.apellido);
        
    if (!req.query.nombre) {
        res.send("no envió el nombre");
    }
    
    if (!req.query.apellido) {
        res.send("no envió la cedula");
    }
    
    /** **/
    usuarios.push({
        id:contador,
        nombre:ba,
        apellido:be
    })
    
    
    /** agregar usuarios **/
    contador++;
    var nuevoUsuario = usuarios.push({
        id:contador,
        nombre:req.query.nombre,
        apellido:req.query.apellido
    })
    
    res.json(nuevoUsuario);
    
})


console.log (usuarios);
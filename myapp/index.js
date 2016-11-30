/** importacion **/
var express = require('express')
var app = express()

app.get('/TecnologiasWeb', function (req, res) {
  
  /** request **/
  console.log("lo que tengo en el request:");
  console.log(req);
  
  console.log("lo que tengo en el res:");  
  res.send('Hello World!')
  
  
})

/** get resquest **/
app.get('/get', function (req, res) {
    res.send('TecnologiasWeb get')
})

/** post resquest **/
app.post('/', function(req, res) {
    res.send('TecnologiaWeb post')
})

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})

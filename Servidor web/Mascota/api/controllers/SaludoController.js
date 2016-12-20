/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    hola:function(req, res) {
        res.json({
            nombre: 'hola'
        });
    },
    
    adios:function(req, res) {
        
        if (req.method == 'GET') {
            res.json({
                nombre: 'adios get'
            });
        }
        
        if (req.method == 'POST') {
            res.send('Adios POST');
        }
        
        if (req.method == 'PUT') {
            res.send('Adios PUT');
        }
        
    },
    
    hora:function(req, res) {
        res.send('Hora')
    }
};


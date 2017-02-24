/**
* UsuarioController
*
* @description :: Server-side logic for managing Usuarios
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	crearUsuarioForm: function (req, res) {

		parametros = req.allParams();

		if (req.method == "POST") {

			Usuario.create({
				nombres: parametros.nombres,
				apellidos: parametros.apellidos,
				correo: parametros.correo
			}).exec(function(error, usuarioCreado) {

				if (error) {
					return res.view('vistas/error', {
		        title: 'Error',
		        error: {
		          descripcion: 'Falla en el metodo HTTP',
							url: '/crearusuario',
							rawError: error
		        }
		      });
				} else {
					return res.view('vistas/Usuario/crearUsuario')
				}

			})
		}
	}
};

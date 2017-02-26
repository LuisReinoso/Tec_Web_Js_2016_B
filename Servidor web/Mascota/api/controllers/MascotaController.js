/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearMascotaForm: function(req, res) {

    parametros = req.allParams();

    if (req.method == "POST") {

      if (parametros.nombre && parametros.fechaNacimiento &&
        parametros.paisNacimiento && parametros.raza) {

        Raza.findOne({
          nombre: parametros.raza
        }).exec(function(error, razaEncontrado) {
          if (error) {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Falla parametros raza invalido',
                url: '/crearmascota',
                rawError: error
              }
            });

          } else {

						if (razaEncontrado) {

							Mascota.create({
								nombre: parametros.nombre,
								fechaNacimiento: parametros.fechaNacimiento,
								paisNacimiento: parametros.paisNacimiento,
								idRaza: razaEncontrado.id
							}).exec(function(error, mascotaCreado) {

								if (error) {
									return res.view('vistas/error', {
										title: 'Error',
										error: {
											descripcion: 'Falla parametros invalido',
											url: '/crearmascota',
											rawError: error
										}
									});
								} else {
									return res.view('vistas/Mascota/crearMascota')
								}

							})
						} else {
							return res.view('vistas/error', {
	              title: 'Error',
	              error: {
	                descripcion: 'Falla parametros raza no encontrado',
	                url: '/crearmascota',
	                rawError: ''
	              }
	            });
						}
          } //fin else
        })

      } else {
        return res.view('vistas/error', {
          title: 'Error',
          error: {
            descripcion: 'Falta parametros mascota',
            url: '/',
            rawError: ""
          }
        });
      }
    }
  },
};

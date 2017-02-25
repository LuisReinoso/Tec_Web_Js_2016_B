/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearRazaForm: function(req, res) {

    parametros = req.allParams();

    if (req.method == "POST") {

      if (parametros.nombre) {
        Raza.create({
          nombre: parametros.nombre,
        }).exec(function(error, usuarioCreado) {

          if (error) {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Falla nombre raza invalido',
                url: '/crearraza',
                rawError: error
              }
            });
          } else {
            return res.view('vistas/Raza/crearRaza')
          }

        })
      } else {
        return res.view('vistas/error', {
          title: 'Error',
          error: {
            descripcion: 'Falta parametros raza',
            url: '/',
            rawError: ""
          }
        });
      }
    }
  },

  eliminiarRaza: function(req, res) {

    parametros = req.allParams();

    if (parametros.id) {

      Raza.destroy({
        id: parametros.id
      }).exec(function(error) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en eliminar raza',
              url: '/',
              rawError: error
            }
          });
        }
      });

      Raza.find().exec(function(error, listaRazas) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en busqueda raza',
              url: '/',
              rawError: error
            }
          });
        }

        return res.view('vistas/Raza/listarRazas', {
          title: "Listar Razas",
          razas: listaRazas
        });
      });

    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en busqueda raza',
          url: '/',
          rawError: ""
        }
      });
    }
  },

  editarRazaForm: function(req, res) {

    parametros = req.allParams();

    if (req.method == "POST") {

      // Busqueda si existe
      Raza.findOne({
        id: parametros.idRaza
      }).exec(function(error, listaRaza) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en busqueda raza',
              url: '/',
              rawError: error
            }
          });
        }

        if (listaRaza.id) {
          Raza.update({
            id: listaRaza.id
          }, {
            nombre: parametros.nombre
          }).exec(function(error, razaEditado) {

            if (error) {
              return res.view('vistas/error', {
                title: 'Error',
                error: {
                  descripcion: 'Actualizar raza',
                  url: '/',
                  rawError: error
                }
              });
            }

            // Obtener razas
            Raza.find().exec(function(error, listaRazas) {

              if (error) {
                return res.view('vistas/error', {
                  title: 'Error',
                  error: {
                    descripcion: 'Falla en listar Razas',
                    url: '/',
                    rawError: error
                  }
                });
              } else {
                return res.view('vistas/Raza/listarRazas', {
                  title: "Listar Razas",
                  razas: listaRazas
                });
              }
            });

          })
        } else {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'No existe raza',
              url: '/',
              rawError: ""
            }
          });
        }

      });
    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Error acceso no permitido',
          url: '/',
          rawError: ""
        }
      });
    }
  }
};

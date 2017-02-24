/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearUsuarioForm: function(req, res) {

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
  },

  eliminiarUsuario: function(req, res) {

    parametros = req.allParams();

    if (parametros.id) {

      Usuario.destroy({
        id: parametros.id
      }).exec(function(error) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en eliminar usuario',
              url: '/',
              rawError: error
            }
          });
        }
      });

      Usuario.find().exec(function(error, listaUsuarios) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en busqueda usuario',
              url: '/',
              rawError: error
            }
          });
        }

        return res.view('vistas/Usuario/listarUsuarios', {
          title: "Listar Usuarios",
          usuarios: listaUsuarios
        });
      });
    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en busqueda usuario',
          url: '/',
          rawError: ""
        }
      });
    }
  }
};

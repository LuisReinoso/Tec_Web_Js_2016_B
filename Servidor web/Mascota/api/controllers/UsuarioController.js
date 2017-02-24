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

      if (parametros.nombres &&
        parametros.apellidos &&
        parametros.correo) {
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
      } else {
        return res.view('vistas/error', {
          title: 'Error',
          error: {
            descripcion: 'Falta parametros usuario',
            url: '/',
            rawError: ""
          }
        });
      }
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
  },

  editarUsuarioForm: function(req, res) {

    parametros = req.allParams();

    if (req.method == "POST") {

      // Busqueda si existe
      Usuario.findOne({
        id: parametros.idUsuario
      }).exec(function(error, listaUsuario) {
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

        if (listaUsuario.id) {
          Usuario.update({
            id: listaUsuario.id
          }, {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password
          }).exec(function(error, usuarioEditado) {

            if (error) {
              return res.view('vistas/error', {
                title: 'Error',
                error: {
                  descripcion: 'Actualizar usuario',
                  url: '/',
                  rawError: error
                }
              });
            }

            // Obtener usuarios
            Usuario.find().exec(function(error, listaUsuarios) {

              if (error) {
                return res.view('vistas/error', {
                  title: 'Error',
                  error: {
                    descripcion: 'Falla en listar Usuarios',
                    url: '/',
                    rawError: error
                  }
                });
              } else {
                return res.view('vistas/Usuario/listarUsuarios', {
                  title: "Listar Usuarios",
                  usuarios: listaUsuarios
                });
              }
            });

          })
        } else {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'No existe usuario',
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

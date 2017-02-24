var Passwords = require('machinepack-passwords');

module.exports = {
  loginForm: function(req, res) {

    parametros = req.allParams()

    if (req.method == "POST") {

      if (parametros.correo && parametros.password) {

        // Buscar Usuario
        Usuario.findOne({
          correo: parametros.correo
        }).exec(function(error, usuarioEncontrado) {

          // Posiblemente esto no debe ser devuelto, dado que
          // indica si existe el usuario
          if (error) {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Error autenticacion',
                url: '/',
                rawError: error
              }
            });
          }

          if (usuarioEncontrado) {

            // Comparo password
            Passwords.checkPassword({

              passwordAttempt: parametros.password,
              encryptedPassword: usuarioEncontrado.password

            }).exec({

              error: function(error) {
                return res.view('vistas/error', {
                  title: 'Error',
                  error: {
                    descripcion: 'Error autenticacion',
                    url: '/login',
                    rawError: error
                  }
                });
              },

              incorrect: function() {
                return res.view('vistas/error', {
                  title: 'Error',
                  error: {
                    descripcion: 'Error autenticacion',
                    url: '/login',
                    rawError: ''
                  }
                });
              },

              success: function() {

                // Autenticar
                req.session.credencial = usuarioEncontrado;
                return res.view('vistas/home')

              }
            });

          } else {

            // Usuario no encontrado
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Error autenticacion',
                url: '/login',
                rawError: ''
              }
            });

          }
        })

      } else {
        return res.view('vistas/error', {
          title: 'Error',
          error: {
            descripcion: 'Falta parametros',
            url: '/login',
            rawError: ''
          }
        });
      }

    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Peticion http incorrecta',
          url: '/',
          rawError: error
        }
      });
    }

  }
}

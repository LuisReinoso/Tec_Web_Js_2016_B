module.exports = {

  home: function(req, res) {
    return res.view('vistas/home', {
      title: "Inicio"
    })
  },

  crearUsuario: function(req, res) {
    return res.view('vistas/Usuario/crearUsuario', {
      title: "Crear Usuario"
    })
  },

  listarUsuarios: function(req, res) {

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
  },

  editarUsuario: function(req, res) {

    parametros = req.allParams();

    if (parametros.id) {
      Usuario.findOne({
        id: parametros.id
      }).exec(function(error, usuarioEncontrado) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla encontrar Usuario',
              url: '/',
              rawError: error
            }
          });
        }

        if (usuarioEncontrado) {
          return res.view('vistas/Usuario/editarUsuario', {
            title: "Listar Usuarios",
            usuarioAEditar: usuarioEncontrado
          });
        } else {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Usuario no encontrado',
              url: '/',
              rawError: error
            }
          });
        }
      })
    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Falla id Usuario',
          url: '/',
          rawError: error
        }
      });
    }
  },

  login: function(req, res) {
    return res.view('vistas/login')
  }
};

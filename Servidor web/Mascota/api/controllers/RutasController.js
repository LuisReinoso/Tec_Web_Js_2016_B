module.exports = {

  home: function (req, res) {
    return res.view('vistas/home', {
      title:"Inicio"
    })
  },

  crearUsuario: function (req, res) {
    return res.view('vistas/Usuario/crearUsuario', {
      title:"Crear Usuario"
    })
  }

};

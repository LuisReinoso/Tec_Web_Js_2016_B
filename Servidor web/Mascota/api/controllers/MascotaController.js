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

  eliminiarMascota: function(req, res) {

    parametros = req.allParams();

    if (parametros.id) {

      Mascota.destroy({
        id: parametros.id
      }).exec(function(error) {
        if (error) {
          return res.view('vistas/error', {
            title: 'Error',
            error: {
              descripcion: 'Falla en eliminar mascota',
              url: '/',
              rawError: error
            }
          });
        }
      });

      Mascota.find()
        .populate('idRaza')
        .exec(function(error, listaMascotas) {
          if (error) {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Falla en busqueda mascota',
                url: '/',
                rawError: error
              }
            });
          }

          return res.view('vistas/Mascota/listarMascotas', {
            title: "Listar Mascotas",
            mascotas: listaMascotas
          });
        });

    } else {
      return res.view('vistas/error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en busqueda mascota',
          url: '/',
          rawError: ""
        }
      });
    }
  },

  editarMascotaForm: function(req, res) {

    parametros = req.allParams();

    if (req.method == "POST") {

      // Busqueda si existe
      Mascota.findOne({
          id: parametros.idMascota
        })
        .populate('idRaza')
        .exec(function(error, listaMascota) {
          if (error) {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'Falla en busqueda mascota',
                url: '/',
                rawError: error
              }
            });
          }

          if (listaMascota) {

            // Buscar si existe raza
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
                  Mascota.update({
                    id: listaMascota.id
                  }, {
                    nombre: parametros.nombre,
                    fechaNacimiento: parametros.fechaNacimiento,
                    paisNacimiento: parametros.paisNacimiento,
                    idRaza: razaEncontrado.id
                  }).exec(function(error, mascotaEditado) {

                    if (error) {
                      return res.view('vistas/error', {
                        title: 'Error',
                        error: {
                          descripcion: 'Actualizar mascota',
                          url: '/',
                          rawError: error
                        }
                      });
                    }

                    // Obtener mascotas
                    Mascota.find()
                      .populate('idRaza')
                      .exec(function(error, listaMascotas) {

                        if (error) {
                          return res.view('vistas/error', {
                            title: 'Error',
                            error: {
                              descripcion: 'Falla en listar Mascotas',
                              url: '/',
                              rawError: error
                            }
                          });
                        } else {
                          return res.view('vistas/Mascota/listarMascotas', {
                            title: "Listar Mascotas",
                            mascotas: listaMascotas
                          });
                        }
                      });

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
              }
            })

          } else {
            return res.view('vistas/error', {
              title: 'Error',
              error: {
                descripcion: 'No existe mascota',
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

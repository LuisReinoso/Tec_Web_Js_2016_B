/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
    nombres: {
      type: 'string',
      minLength: 5
    },
    apellidos: {
      type: 'string',
      minLength: 5
    },
    correo: {
      type: 'string',
      email: true,
      unique: true
    },
    password: {
      type: 'string',
      defaultsTo: "123456"
    }
  },

  // Lifecycle callbacks
  afterCreate: function(usuario, cb) {

    // Editar password
    Passwords.encryptPassword({
      password: usuario.password,
    }).exec({
      error: function(err) {
        cb(err)
      },
      success: function(result) {
        usuario.password = result;
        cb()
      },
    });
  },

  beforeUpdate: function(usuario, cb) {

    // Editar password
    Passwords.encryptPassword({
      password: usuario.password,
    }).exec({
      error: function(err) {
        cb(err)
      },
      success: function(result) {
        usuario.password = result;
        cb()
      },
    });
  }

};

const {Schema, model} = require("mongoose");

const UsuarioSchema = new Schema(
    {
      usuario: String,
      contrasenna: String,
      nombre: String,
      apellido: String,
      correo: String,
      fechaNacimiento: Date,
      direccion: String,
      telefono: String,
      celular: String,
      rol: String
    },
    {timestamps: true}
    
);

const UsuarioModel = model("Usuarios", UsuarioSchema);
module.exports = UsuarioModel;
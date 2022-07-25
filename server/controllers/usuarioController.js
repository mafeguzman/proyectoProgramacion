const UsuarioModel = require("../models/usuario");


module.exports.get = async (req, res, next) => {
    const usuarios = await UsuarioModel.find().exec();
    res.json(usuarios);
  };
  
  
  module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const usuario = await UsuarioModel.findOne({ _id: id });
    res.json(usuario);
  };
  
  
  module.exports.create = (req, res, next) => {
    const usuarioModel = new UsuarioModel( req.body );
    usuarioModel.save();
    res.json(usuarioModel);
  };
  
  
  module.exports.delete = async (req, res, next) => {
    const usuario = await UsuarioModel.findByIdAndRemove(req.params.id);
    
    if (usuario) {
      res.json({ result: "Usuario borrado correctamente", usuario });
    } else {
      res.json({ result: " El ID del usuario no existe en los documentos de la BD", usuario });
    }
  };
  
  
  module.exports.update = async (req, res, next) => {
    const usuario = await UsuarioModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,     // ==> {numFactura: numFactura, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(usuario);
  };
  
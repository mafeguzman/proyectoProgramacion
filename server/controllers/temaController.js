//Utilización del modelo de tema
const TemaModel = require("../models/tema");

//Método para obtener los temas
module.exports.get = async (req, res, next) => {
  const temas = await TemaModel.find().exec();
  res.json(temas);
};

//Método para obtener un tema por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const tema = await TemaModel.findOne({ _id: id });
  res.json(tema);
};

//Método para crear los temas
module.exports.create = (req, res, next) => {
  const temaModel = new TemaModel( req.body );
  temaModel.save();
  res.json(temaModel);
};

//Método para eliminar los temas
module.exports.delete = async (req, res, next) => {
  const tema = await TemaModel.findByIdAndRemove(req.params.id);
  // si tema es null significa que no existe el registro
  if (tema) {
    res.json({ result: "Tema borrada correctamente", tema });
  } else {
    res.json({ result: "ID de la tema no existe en los documentos de la BD", tema });
  }
};

//Método para modificar los temas
module.exports.update = async (req, res, next) => {
  const tema = await TemaModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,     // ==> {numTema: numTema, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(tema);
};


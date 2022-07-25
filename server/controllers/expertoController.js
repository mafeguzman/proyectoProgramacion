//Utilización del modelo de experto
const ExpertoModel = require("../models/experto");

//Método para obtener los expertos
module.exports.get = async (req, res, next) => {
  const expertos = await ExpertoModel.find().exec();
  res.json(expertos);
};

//Método para obtener un experto por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const experto = await ExpertoModel.findOne({ _id: id });
  res.json(experto);
};

//Método para crear los expertos
module.exports.create = (req, res, next) => {
  const expertoModel = new ExpertoModel( req.body );
  expertoModel.save();
  res.json(expertoModel);
};

//Método para eliminar los expertos
module.exports.delete = async (req, res, next) => {
  const experto = await ExpertoModel.findByIdAndRemove(req.params.id);
  // si experto es null significa que no existe el registro
  if (experto) {
    res.json({ result: "Experto borrada correctamente", experto });
  } else {
    res.json({ result: "ID de la experto no existe en los documentos de la BD", experto });
  }
};

//Método para modificar los expertos
module.exports.update = async (req, res, next) => {
  const experto = await ExpertoModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,     // ==> {numExperto: numExperto, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(experto);
};


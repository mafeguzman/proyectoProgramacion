//Uso de la libreía Mongoose
const { Schema, model } = require("mongoose");

//Creación del esquema de tema
const TemaSchema = new Schema(
  {
    nombre: String,
    observaciones: String,
    estado: String,
    costo: Number
  },
  { timestamps: true } //fechas de creación y modificación
);

//Creación del modelo, que sería el que une el esquema 
//con la colección de documentos en mongo
const TemaModel = model("Temas", TemaSchema);

//Hace visible en modelo con el module.exports
module.exports = TemaModel;
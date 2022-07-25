//Uso de la libreía Mongoose
const { Schema, model } = require("mongoose");

//Creación del esquema de experto
const ExpertoSchema = new Schema(
  {
    nombreTema: String,
    observaciones: String,
    estado: String,
    tema: // Referencia con tema
        {
          type: Schema.Types.ObjectId,
          ref: "temas",
          required: true
        },
    usuario: // Referencia con usuario
        {
          type: Schema.Types.ObjectId,
          ref: "temas",
          required: true
        },
  },
  { timestamps: true } //fechas de creación y modificación
);

//Creación del modelo, que sería el que une el esquema 
//con la colección de documentos en mongo
const ExpertoModel = model("Expertos", ExpertoSchema);

//Hace visible en modelo con el module.exports
module.exports = ExpertoModel;
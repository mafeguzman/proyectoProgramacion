//Uso de la libreía Mongoose
const { Schema, model } = require("mongoose");

//Creación del esquema de factura
const FacturaSchema = new Schema(
  {
    numFactura: {
      type: Number,
      unique: true,
      required: true,
    },
    detalle: String,
    chat: String,
    feedback: String,
    monto: Number,
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
const FacturaModel = model("Facturas", FacturaSchema);

//Hace visible en modelo con el module.exports
module.exports = FacturaModel;
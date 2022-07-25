//Express para agregar las rutas
const express = require("express");
const router = express.Router();

//Experto controller para los métodos definidos
const expertoController = require("../controllers/expertoController");

//Definición de rutas para cada uno de los verbos para los expertos
router.get("/", expertoController.get);

router.get("/:id", expertoController.getById);

router.post("/", expertoController.create);

router.delete("/:id", expertoController.delete);

router.put("/:id", expertoController.update);

module.exports = router;

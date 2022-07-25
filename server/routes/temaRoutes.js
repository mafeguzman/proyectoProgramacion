//Express para agregar las rutas
const express = require("express");
const router = express.Router();

//Experto controller para los métodos definidos
const temaController = require("../controllers/temaController");

//Definición de rutas para cada uno de los verbos para los temas
router.get("/", temaController.get);

router.get("/:id", temaController.getById);

router.post("/", temaController.create);

router.delete("/:id", temaController.delete);

router.put("/:id", temaController.update);

module.exports = router;

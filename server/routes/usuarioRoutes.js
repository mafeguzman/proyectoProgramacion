const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.get);

router.get("/:id", usuarioController.getById);

router.post("/", usuarioController.create);

router.delete("/:id", usuarioController.delete);

router.put("/:id", usuarioController.update);

module.exports = router;
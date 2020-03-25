const router = require("express").Router();
const IncidentsController = require("./../controllers/IncidentsController");

router.get("/", IncidentsController.index);
router.post("/", IncidentsController.store);
router.delete("/:id", IncidentsController.delete);

module.exports = router;
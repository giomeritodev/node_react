const router = require("express").Router();
const OngController = require("./../controllers/OngController");

router.get("/", OngController.index);
router.post("/", OngController.store);

module.exports = router;
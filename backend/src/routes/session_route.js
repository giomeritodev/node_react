const router = require("express").Router();
const SessionController = require("./../controllers/SessionController");

router.post("/", SessionController.create);

module.exports = router;
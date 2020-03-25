const router = require("express").Router();

router.get("/", (req, res) => {
	return res.json({
		message: "Api funcionando"
	});
});

module.exports = router;
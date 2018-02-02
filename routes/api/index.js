const router = require("express").Router();
const adventureRoutes = require("./adventure");

// Adventures routes
router.use("/adventure", adventureRoutes);

module.exports = router;

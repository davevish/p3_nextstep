const router = require("express").Router();
const adventureController = require("../../controllers/adventureController");

// Matches with "/api/adventure"
router.route("/")
  .get(adventureController.findAll)
  .post(adventureController.create);

// Matches with "/api/adventure/:id"
router
  .route("/:id")
  .get(adventureController.findById)
  .put(adventureController.update)
  .delete(adventureController.remove);

module.exports = router;

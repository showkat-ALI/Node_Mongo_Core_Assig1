const express = require("express");
const {
  getAllUsers,
  getRandomUser,
  saveAUser,
  updateAuser,
  deleteAUser,
  bulkUpdate,
} = require("../../controllers/Users.contorller");
const router = express.Router();
router
  .get("/all", getAllUsers)
  .get("/random", getRandomUser)
  .post("/save", saveAUser)
  .patch("/:id/update", updateAuser)
  .delete("/:id/delete", deleteAUser)
  .patch("/bulk-update", bulkUpdate);
module.exports = router;

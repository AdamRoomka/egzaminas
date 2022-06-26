const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getAllUserItems,
  createUserItems,
  findItemAndUpdate,
  findItemAndDelete,
  updateUser,
  deleteUserById,
  createUser,
  getEmail,
  loginUser,
} = require("../controllers/authController");

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/email").get(getEmail);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserById);
router.route("/update/:id").patch(updateUser);
router.route("/deleteUser/:id").patch(deleteUserById);

router.route("/:id/items/upd/:subID").patch(findItemAndUpdate);
router.route("/:id/items/dlt/:subID").patch(findItemAndDelete);
router.route("/:id/items").get(getAllUserItems).patch(createUserItems);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUserById,
  loginUser,
  getUserEmail,
  getUserById,
} = require("../controllers/authController");

router.route("/").get(getAllUsers);
router.route("/update/:id").patch(updateUser);
router.route("/deleteUser/:id").patch(deleteUserById);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserById);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getAllBooks,
  createUserBooks,
  findBooksmAndUpdate,
  findBooksAndDelete,
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

router.route("/:id/items/upd/:subID").patch(findBooksmAndUpdate);
router.route("/:id/items/dlt/:subID").patch(findBooksAndDelete);
router.route("/:id/books").get(getAllBooks).patch(createUserBooks);

module.exports = router;
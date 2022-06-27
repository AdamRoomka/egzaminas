const express = require("express");

const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  findBooksAndUpdate
} = require("../controllers/bookController");

const router = express.Router();

// apsaugotas routas
router.route("/").get(getAllBooks);

router.route("/create").post(createBook);

router.route("/:id/book/update/:subID").patch(findBooksAndUpdate);

router.route("/:id").get(getBookById).patch(updateBook).delete(deleteBook);

module.exports = router;

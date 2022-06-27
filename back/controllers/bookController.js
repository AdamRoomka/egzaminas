const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books: books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        books: book,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        book: newBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const upatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        book: upatedBook,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.findBooksAndUpdate = async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.subID);
  console.log(req.body);

  try {
    await Book.findOneAndUpdate(
      { _id: req.params.id, "placesToVisit._id": req.params.subID },
      {
        $set: {
          "placesToVisit.$.places": req.body.places,
          "placesToVisit.$.duration": req.body.duration,
        },
      },
      (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        message: "Places is updated.",
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
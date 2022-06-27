const mongoose = require("mongoose");
// DB schema
const bookSchema = new mongoose.Schema(
  {
    name: { type: String},
    category: {type: String},
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre("save", function () {
//   console.log(this);
// });

// Modelis
const Book = new mongoose.model("Book", bookSchema);

// Duomenų siuntimas į DB
// const testTour = new Tour({
//   name: "Kaunas",
//   price: 300,
//   difficulty: "easy",
//   placesToVisit: [
//     {
//       places: "Pirma vieta",
//       duration: 23,
//     },
//     {
//       places: "Antra vieta",
//       duration: 33,
//     },
//     {
//       places: "Trecia vieta",
//       duration: 53,
//     },
//   ],
// });

//testTour.save();

module.exports = Book;

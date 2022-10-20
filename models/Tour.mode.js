const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please give us a name for this tour"],
      trim: true,
      unique: true,
      minLength: 2,
      maxLength: 100,
    },
    description: {
      type: String,
      require: [true, "Please give a description"],
    },
    price: {
      type: Number,
      require: true,
      min: [1000, "Price have be over 1000 $"],
    },
    image: {
      type: String,
      required: [true, "Please give a image"],
    },
    views: {
      type: Number,
      required: [true, "Please give a value to views"],
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

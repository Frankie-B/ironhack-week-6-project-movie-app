// Extended User Model with relations.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    friends: [ObjectId]((ref: users)),
  },
  {
    rated_movies: [
      {
        movie_rate: imdbID,
        title: String,
        director: String,
        year: Number,
        rate: Number,
      },
    ],
  },
  {
    timestamps: true, // display time stamp user is created
  }
);

module.exports = mongoose.model('User', userSchema);

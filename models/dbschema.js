const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  _id: String,
  sequence_value: Number
});

// 스키마 생성(데이터의 뼈대를 세운다)
const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  writer: String,
  date: String,
  views: Number,
  comments: Number
});

module.exports = {
  post: mongoose.model('Post', postSchema),
  counter: mongoose.model('Counter', counterSchema)
}
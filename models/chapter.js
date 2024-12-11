const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    courseId: { type: String, required: true }, // Course ID to which the chapter belongs
    title: { type: String, required: true },
    description: { type: String },
    order: { type: Number, required: true }, // Order of the chapter in the course
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('chapter', chapterSchema);
  
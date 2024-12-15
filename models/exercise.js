const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    chapterId: { type: String, required: true }, // Chapter ID to which the exercise belongs
    title: { type: String, required: true },
    description: { type: String },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    createdAt: { type: Date, default: Date.now },
    marks: { type: Number },// — The marks awarded for the question.

  });
  
  module.exports = mongoose.model('Exercise', exerciseSchema);
  

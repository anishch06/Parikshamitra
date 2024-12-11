const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    exerciseId: { type: String, required: true }, // Exercise ID to which the question belongs
    questionText: { type: String, required: true },
    options: [{ type: String }], // Array of multiple-choice options
    correctAnswer: { type: String, required: true }, // Correct option
    type: { type: String, enum: ['MCQ', 'Descriptive'], default: 'MCQ' }, // Question type
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Question', questionSchema);
  
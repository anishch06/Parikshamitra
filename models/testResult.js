const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
    studentId: { type: String, required: true }, // ID of the student
    testId: { type: String, required: true }, // Test ID
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('TestResult', testResultSchema);
  
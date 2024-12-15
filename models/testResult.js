const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
    studentId: { type: String, required: true }, // ID of the student
    testId: { type: String, required: true }, // Test ID
    subject: { type: String, required: true } ,//— To specify the subject the test belongs to.
    testType: { type: String, enum: ['quiz', 'midterm', 'final', 'practice'], required: true },//— The type of test.
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    timeTaken: { type: Number },// — Time taken by the student to complete the test (in minutes).
    correctAnswers: { type: Number },// — Number of correctly answered questions.
    rank: { type: Number } ,//— Student's rank compared to peers who took the same test
    submittedAt: { type: Date, default: Date.now },
    passStatus: { type: Boolean } ,//— Whether the student passed or failed the test.
    testDate: { type: Date } ,//— The date when the test was taken.
  });
  
  module.exports = mongoose.model('TestResult', testResultSchema);
  

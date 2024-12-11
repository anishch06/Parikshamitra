const mongoose = require('mongoose');

const performanceAnalyticsSchema = new mongoose.Schema({
    studentId: { type: String, required: true }, // ID of the student
    courseId: { type: String, required: true }, // ID of the course
    averageScore: { type: Number }, // Average score across tests
    completionRate: { type: Number }, // Percentage of course completion
    strengths: [{ type: String }], // List of areas of strength
    weaknesses: [{ type: String }], // List of areas needing improvement
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('PerformanceAnalytics', performanceAnalyticsSchema);
  
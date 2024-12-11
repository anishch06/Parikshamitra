const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  enrolledCourses: [{ type: String }], // Array of course names or IDs
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
/*
{
  "name": "John Doe",
  "age": 20,
  "email": "john.doe@example.com",
  "enrolledCourses": [
    "Math101",
    "Physics201",
    "ComputerScience305"
  ],
  "createdAt": "2024-12-11T10:30:00Z"
}
*/
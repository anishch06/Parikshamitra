const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, unique: true, required: true },
  enrolledCourses: [{ type: String }], // Array of course names or IDs
  createdAt: { type: Date, default: Date.now },

  phoneNumber: { type: String },// — For contact information.
  address: { type: String },// — Physical address of the student.
  profilePicture: { type: String }, //— URL or path to student's profile image.
  status: { type: String, enum: ['active', 'inactive'] } ,//— Current status of the student.
  dateOfBirth: { type: Date } ,//— Student's date of birth
  assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'TeacherProfile' },
  teacherFeedback: [{ type: String }],  // Feedback from teachers about the student
  
  fatherName: { type: String },
  motherName: { type: String },
  guardianName: { type: String },
  fatherContact: { type: String },
  motherContact: { type: String },
  guardianContact: { type: String }, //if applicable
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);

const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    courseId: { type: String, required: true }, // Course ID to which the chapter belongs
    title: { type: String, required: true },
    description: { type: String },
    order: { type: Number, required: true }, // Order of the chapter in the course
    createdAt: { type: Date, default: Date.now },
    duration: { type: Number }, //— Estimated time (in hours) to complete the chapter.
    resources: [ { type: String } ] ,//— List of resources like books, links, or PDFs associated with the chapter.
    isPublished: { type: Boolean, default: true },// — Whether the chapter is published.
  });
  
  module.exports = mongoose.model('chapter', chapterSchema);
  

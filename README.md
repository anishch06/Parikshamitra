# Parikshamitra

<p style="font size:50px;">Parikshamitra is a web application designed for managing online assessments and exams. It includes features like student profiles, a question bank, test results, and performance analytics. This application helps educators efficiently manage and track student progress.

Features
Student Profile Management: Manage and update student details.
Question Bank: Create and store questions for various subjects.
Test Management: Create and manage online exams.
Test Results: View and analyze student test results.
Performance Analytics: Generate performance reports for students based on test results.
Installation
To run this project locally, follow these steps:

1. Clone the repository
Clone the repository to your local machine:<br>
git clone https://github.com/anishch06/Parikshamitra.git<br>
cd Parikshamitra
2. Install dependencies<br>
Install the required dependencies:<br>npm install

3. Set up MongoDB
Make sure MongoDB is installed locally, or set up MongoDB Atlas. Update the database connection in the project configuration with your MongoDB URI.

4. Run the application by starting the server:<br>
 npm start<br>
Access the application at:
http://localhost:3000
5. Get and Post requests to app.js:
    <br><br>
  a)   [GET] http://localhost:3000/students<br>
      [POST] http://localhost:3000/students<br>
     POST Request body sample <br>
     
 {
  "name": "Alice Johnson",
  "age": 18,
  "email": "alice.johnson@example.com",
  "enrolledCourses": ["Biology101", "Chemistry202", "Mathematics301"],
  "createdAt": "2024-12-12T14:20:00Z",
  "phoneNumber": "9876543210",
  "address": "123 Elm Street, Springfield, IL",
  "profilePicture": "https://example.com/profiles/alice.jpg",
  "status": "active",
  "dateOfBirth": "2006-04-15",
  "assignedTeacher": "63a5bc8c8f12345678abcd02",
  "teacherFeedback": [
    "Excellent participation in group discussions.",
    "Needs to improve on time management for assignments."
  ],
  "fatherName": "Robert Johnson",
  "motherName": "Sophia Johnson",
  "guardianName": null,
  "fatherContact": "9876543211",
  "motherContact": "9876543212",
  "guardianContact": null
}

  <br><br>
  b)  [GET] http://localhost:3000/chapters<br>
    [POST] http://localhost:3000/chapters<br>
     POST Request body sample<br>
 {
  "courseId": "course101",
  "title": "Introduction to Algebra",
  "description": "This chapter covers the basic principles of algebra, including variables, expressions, and equations.",
  
  "createdAt": "2024-12-14T10:00:00Z",
  "duration": 2,
  "resources": [
    "https://example.com/algebra-introduction.pdf",
    "https://example.com/algebra-video",
    "https://example.com/interactive-algebra-tool"
  ],
  "isPublished": true
}

<br><br>
  c) [GET] http://localhost:3000/performanceAnalytics<br>
    [POST] http://localhost:3000/performanceAnalytics<br>
     POST Request body sample<br>
 {
  "studentId": "63a5bc8c8f12345678abcd03",
  "courseId": "course101",
  "averageScore": 87.5,
  "completionRate": 92,
  "strengths": ["Problem Solving", "Conceptual Understanding"],
  "weaknesses": ["Time Management", "Accuracy in Calculations"],
  "updatedAt": "2024-12-14T15:30:00Z",
  "accuracy": 85,
  "overallGrade": "A"
}

 <br><br>
  d) [GET] http://localhost:3000/question<br>
    [POST] http://localhost:3000/question<br>
     POST Request body sample<br>
 {
  "exerciseId": "exercise001",
  "questionText": "What is the capital of France?",
  "options": [
  "Berlin",
    "Madrid",
    "Paris",
    "Rome"
  ],
  "correctAnswer": "Paris",
  "type": "MCQ",
  "createdAt": "2024-12-14T10:15:00Z",
  "questionCount": 10
}

 <br><br>
  e) [GET] http://localhost:3000/exercise<br>
    [POST] http://localhost:3000/exercise<br>
     POST Request body sample<br>
 {
  "chapterId": "chapter001",
  "title": "Introduction to Fractions",
  "description": "This exercise focuses on understanding and solving basic problems related to fractions.",
  "difficulty": "Easy",
  "createdAt": "2024-12-14T11:30:00Z",
  "marks": 10
}

   <br><br>
   f) [GET] http://localhost:3000/testResults<br>
      [POST] http://localhost:3000/testResults<br>
       POST Request body sample<br>
{
  "studentId": "63a5bc8c8f12345678abcd03",
  "testId": "test12345",
  "subject": "Mathematics",
  "testType": "midterm",
  "score": 85,
  "maxScore": 100,
  "timeTaken": 75,
  "correctAnswers": 17,
  "rank": 5,
  "submittedAt": "2024-12-14T10:45:00Z",
  "passStatus": true,
  "testDate": "2024-12-13T00:00:00Z"
}

   
Technologies:<br>
Node.js: JavaScript runtime for building the backend.<br>
Express.js: Framework that makes it easy to manage HTTP requests, route them, and send responses back to the client.<br>
MongoDB: NoSQL database for storing data.<br>
</p>





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
    "name": "Mary John",
    "age": 20,
    "email": "john.mary@example.com",
    "enrolledCourses": [
      "Math",
      "Physics",
      "Geography"
    ],
    "createdAt": "2024-12-11T10:30:00.000Z",
    "__v": 0
  }
  <br><br>
  b)  [GET] http://localhost:3000/chapters<br>
    [POST] http://localhost:3000/chapters<br>
     POST Request body sample<br>
  {
  "title": "Introduction to Algebra",
  "course": "Math",
  "content": "This chapter covers the basics of algebra including variables, equations, and expressions.",
  "createdAt": "2024-12-11T10:45:00Z"
  }
<br><br>
  c) [GET] http://localhost:3000/performanceAnalytics<br>
    [POST] http://localhost:3000/performanceAnalytics<br>
     POST Request body sample<br>
 {
  "studentId": "60d7fd61c74f8f4f4c1d5f2b",
  "totalTestsTaken": 5,
  "averageScore": 90,
  "highestScore": 95,
  "lowestScore": 80,
  "createdAt": "2024-12-11T12:15:00Z"
 }
 <br><br>
  d) [GET] http://localhost:3000/question<br>
    [POST] http://localhost:3000/question<br>
     POST Request body sample<br>
 {
  "questionText": "What is the capital of France?",
  "options": ["Berlin", "Madrid", "Paris", "Rome"],
  "correctAnswer": "Paris",
  "subject": "Geography",
  "createdAt": "2024-12-11T11:15:00Z"
 }
 <br><br>
  e) [GET] http://localhost:3000/exercise<br>
    [POST] http://localhost:3000/exercise<br>
     POST Request body sample<br>
 {
    {
  "title": "Algebraic Equations Exercise",
  "chapter": "Introduction to Algebra",
  "questions": [
    {
      "questionText": "Solve for x: 2x + 5 = 15",
      "options": ["x = 5", "x = 10", "x = 20", "x = 25"],
      "correctAnswer": "x = 5"
    },
    {
      "questionText": "What is 3x - 4 = 8?",
      "options": ["x = 4", "x = 2", "x = 1", "x = 5"],
      "correctAnswer": "x = 4"
    }
  ],
  "createdAt": "2024-12-11T11:00:00Z"
   }
   <br><br>
   f) [GET] http://localhost:3000/testResults<br>
      [POST] http://localhost:3000/testResults<br>
       POST Request body sample<br>
 {
 {
  "studentId": "60d7fd61c74f8f4f4c1d5f2b",
  "testId": "60d7fd61c74f8f4f4c1d5f2c",
  "score": 85,
  "timeTaken": "30 minutes",
  "createdAt": "2024-12-11T12:00:00Z"
 }
   
Technologies:<br>
Node.js: JavaScript runtime for building the backend.<br>
Express.js: Framework that makes it easy to manage HTTP requests, route them, and send responses back to the client.<br>
MongoDB: NoSQL database for storing data.<br>
</p>





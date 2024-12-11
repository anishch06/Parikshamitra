
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const connectDB = require('./connect');
connectDB();
app.use(express.json()); // This middleware is required to parse JSON data


const StudentProfile = require('./models/studentProfile'); // Example schema
const Chapter = require('./models/chapter');
const exercise = require('./models/exercise');
const performanceAnalyticsSchema = require('./models/performanceAnalytics');
const question = require('./models/question');

const TestResult = require('./models/testResult');
const exercise = require('./models/exercise');




app.post('/students', async (req, res) => {
    try {
      const student = new StudentProfile(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get('/students', async (req, res) => {
    try {
      const student = await StudentProfile.find();
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  app.post('/chapters', async (req, res) => {
    try {
      const chapter = new Chapter(req.body);
      await chapter.save();
      res.status(201).json(chapter);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  app.get('/chapters', async (req, res) => {
    try {
      const chapters = await Chapter.find();
      res.json(chapters);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/performanceAnalytics', async (req, res) => {
    try {
      const performanceAnalytics = new performanceAnalytics(req.body);
      await performanceAnalytics.save();
      res.status(201).json(performanceAnalytics);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  app.get('/performanceAnalytics', async (req, res) => {
    try {
      const performanceAnalytics = await performanceAnalytics.find();
      res.json(performanceAnalytics);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/question', async (req, res) => {
    try {
      const question = new question(req.body);
      await question.save();
      res.status(201).json(question);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  app.get('/question', async (req, res) => {
    try {
      const question = await question.find();
      res.json(question);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/exercise', async (req, res) => {
    try {
      const exercise= new exercise(req.body);
      await exercise.save();
      res.status(201).json(exercise);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  app.get('/exercise', async (req, res) => {
    try {
      const exercise = await exercise.find();
      res.json(exercise);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  
  app.post('/testResults', async (req, res) => {
    try {
      const testResults= new testResults(req.body);
      await testResults.save();
      res.status(201).json(testResults);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  app.get('/testResults', async (req, res) => {
    try {
      const testResults = await testResults.find();
      res.json(testResults);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });




  

app.get('/', (req, res) => {
    res.send('Hello World');  
  });

  app.post('/submit-form', (req, res) => {
    res.send('Form submitted');
  }); 

  app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
  });

  const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});
app.get('/', (req, res) => {
    res.json({
      title: 'My App',
      message: 'Hello world!'
    });
  });
  


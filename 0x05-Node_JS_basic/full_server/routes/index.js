// full_server/index.js
import express from 'express';
import readDatabase from './utils';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const app = express();
const PORT = 1245;
const router = express.Router();

// Link the route / to the AppController
router.get('/', AppController.getHomepage);

app.get('/', async (req, res) => {
  try {
    const data = await readDatabase('../database.json');
    res.json(data);
  } catch (error) {
    res.status(200).json({ error: 'Unable to read the database.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://

// Link the route /students and /students/:major to the StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;

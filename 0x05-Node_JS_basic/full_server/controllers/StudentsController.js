// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('../database.json');
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      res.status(200).send('This is the list of our students');

      fields.forEach((field) => {
        const studentsList = data[field].join(', ');
        res.write(`\nNumber of students in ${field}: ${data[field].length}. List: ${studentsList}`);
      });

      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('../database.json');
      const studentsList = data[major].join(', ');

      res.status(200).send(`List: ${studentsList}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

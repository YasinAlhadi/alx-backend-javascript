const database = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    database(process.argv[2].toString())
      .then((data) => {
        res.send(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
        res.send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    database(process.argv[2])
      .then((data) => {
        const { major } = req.params;
        if (data[major]) {
          res.send(`List: ${data[major].join(', ')}`);
        } else {
          res.status(500).send('Major not found');
        }
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
        res.send(error.message);
      });
  }
}

module.exports = StudentsController;

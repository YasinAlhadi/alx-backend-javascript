const file = require('fs').promises;

function countStudents(filePath) {
  const students = [];
  const feilds = {};
  let length = 0;
  return file.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      length = lines.length;
      for (const line of lines) {
        if (line !== '') {
          students.push(line.split(','));
        }
      }
      length -= 1;
      console.log(`Number of students: ${length}`);
      for (const student of students) {
        if (!feilds[student[3]]) {
          feilds[student[3]] = [];
        }
        feilds[student[3]].push(student[0]);
      }
      delete feilds.field;
      for (const field in feilds) {
        if (field) {
          const list = feilds[field];
          const count = list.length;
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;

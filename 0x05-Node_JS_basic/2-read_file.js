const file = require('fs');

function countStudents(filePath) {
  if (!file.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  let data = file.readFileSync(filePath, 'utf8');
  data = data.split('\n');
  const students = data.map((item) => item.split(','))
    .filter((item) => item.length === 4 && item[0] !== 'firstname');

  const obj = {
    firstname: 0,
    lastname: 1,
    age: 2,
    field: 3,
  };

  const CS = [];
  const SWE = [];

  for (const student of students) {
    if (student[obj.field] === 'CS') {
      CS.push(student[obj.firstname]);
    } else if (student[obj.field] === 'SWE') {
      SWE.push(student[obj.firstname]);
    }
  }
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
}
module.exports = countStudents;

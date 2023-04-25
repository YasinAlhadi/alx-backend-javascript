export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentGrade = studentsByCity.map((student) => {
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        return { ...student, grade: grade.grade };
      }
    }
    if (student.grade === undefined) {
      return { ...student, grade: 'N/A' };
    }
    return student;
  });
  return studentGrade;
}

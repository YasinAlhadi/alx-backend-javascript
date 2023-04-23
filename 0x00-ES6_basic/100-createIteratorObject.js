export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const dept of Object.values(report.allEmployees)) {
    for (const employee of dept) {
      allEmployees.push(employee);
    }
  }

  return allEmployees;
}

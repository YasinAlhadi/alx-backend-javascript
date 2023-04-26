export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Yasin',
    lastName: 'Alhadi',
    age: 30,
    location: 'Sudan',
};

const student2: Student = {
    firstName: 'Ali',
    lastName: 'Osman',
    age: 27,
    location: 'Egypt',
};

const studentsList: Array<Student> = [student1, student2];

export const renderTable = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const headR = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headR);
    headR.insertAdjacentHTML('beforeend', '<th>firstName</th>');
    headR.insertAdjacentHTML('beforeend', '<th>location</th>');
    students.forEach((student) => {
        const row = document.createElement('tr');
        table.insertAdjacentElement('beforeend', row);
        row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    });
    document.body.insertAdjacentElement('beforeend', table);
}
renderTable(studentsList)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
var student1 = {
    firstName: 'Yasin',
    lastName: 'Alhadi',
    age: 30,
    location: 'Sudan',
};
var student2 = {
    firstName: 'Ali',
    lastName: 'Osman',
    age: 27,
    location: 'Egypt',
};
var studentsList = [student1, student2];
var renderTable = function (students) {
    var table = document.createElement('table');
    var headR = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headR);
    headR.insertAdjacentHTML('beforeend', '<th>firstName</th>');
    headR.insertAdjacentHTML('beforeend', '<th>location</th>');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        table.insertAdjacentElement('beforeend', row);
        row.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        row.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
    });
    document.body.insertAdjacentElement('beforeend', table);
};
exports.renderTable = renderTable;
(0, exports.renderTable)(studentsList);


// call
const course = {
    name: '',
    description: '',
    students: [],
    addStudents(studentName) {
        this.students.push(studentName);
        console.log(`${studentName} added to
        ${this.name} course`);
    },
    date: '12/12/2021'
};
const english = {
    name: "english course",
    description: "this is good course",
    students: []
};
const math = {
    name: "math course",
    description: "this is very good course",
    students: []
};

export const addStudents = cour.addStudents;
// addStudents .call(english, "asaf")
// addStudents .call(math, "Dani")
// addStudents .call(english, "asaf")
// addStudents .call(math, "Ron")


//apply
addStudents.apply = (math,['Joselyn'])

//bind

const addStudent = addStudents.bind(math);
addStudent('Daniel');
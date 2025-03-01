const students = [
    {name: 'Verlã', testGrade: 8},
    {name: 'Silvio', testGrade: 4},
    {name: 'Sabrina', testGrade: 7.9},
    {name: 'Fernanda', testGrade: 7.8},
    {name: 'Amanda', testGrade: 7},
    {name: 'Antonela', testGrade: 7.9},
    {name: 'Simone', testGrade: 7},
    {name: 'Isabel', testGrade: 6},
    {name: 'Pedro', testGrade: 4.9},
    {name: 'Helena', testGrade: 8.5}
]

const newStudents = students.map(student => {
    return{
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }
})

console.log(newStudents)
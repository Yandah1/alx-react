import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const seq = Seq(grades);
  const students = seq.filter((val) => val.score > 70).toJS();

  Object.keys(students).map((key) => {
    const name = students[key].firstName;
    const surname = students[key].lastName;

    students[key].firstName = name.charAt(0).toUpperCase() + name.slice(1);
    students[key].lastName = surname.charAt(0).toUpperCase() + surname.slice(1);
  });

  console.log(students);
}

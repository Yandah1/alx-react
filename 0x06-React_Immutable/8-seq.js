import { Seq } from 'immutable';
export default function printBestStudents(grades) {
    Seq(grades)
    .filter(({ score }) => score >= 70)
    .map(({ firstName, lastName, score }) => ({
      score,
      firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1)
    }))
    .forEach(student => {
      console.log(JSON.stringify(student));
    });
}

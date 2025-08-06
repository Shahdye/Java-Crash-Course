let grades = ["A+", "A", "FAIL"];

let goodGrades = ["A+", "A"];

for (let i = 0; i < grades.length; ++i) {
  if (i !== "FAIL") console.log(grades[i]);
}
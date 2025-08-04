let grades = ["A+", "A", "FAIL"];

let goodGrades = grades.filter((element) => {
  console.log(element);
  if (element !== "FAIL") {
    return true;
  }
});

console.log(goodGrades)

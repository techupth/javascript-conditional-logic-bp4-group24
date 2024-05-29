// Exercise #5: Student Grade Calculation
function calculateStudentGrade(score) {
  // Start writing your solution here
  let grade;
  if (score >= 90) {
      grade = "A";
  } else if (score >= 80) {
      grade = "B";
  } else if (score >= 70) {
      grade = "C";
  } else if (score >= 60) {
      grade = "D";
  } else {
      grade = "F";
  }
  return grade;
};


// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(`John grade is ${johnGrade}`); //'John grade is F'
console.log(`Lisa grade is ${lisaGrade}`); //'Lisa grade is C'
console.log(`Jane grade is ${janeGrade}`); //'Jane grade is B'
console.log(`JJ grade is ${jjGrade}`); //'JJ grade is D'
console.log(`Alex grade is ${alexGrade}`); //'Alex grade is A'

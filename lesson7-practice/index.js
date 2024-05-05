const getArrayAverage = (arr) =>
  arr.reduce((acc, el) => acc + el, 0) / arr.length;

const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25,
  },
  {
    studentId: 4, // Unique identifier for each student
    studentName: "Mushegh",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25,
  },
];

// let target = {
//   1: {
//     strudentName: "aunun",
//     scores: [23, 343, 234],
//   },
//   3: {
//     studentName: "qda",
//   },
// };

const groupedByStudentId = evaluations.reduce((res, el) => {
  const { studentId, studentName, score } = el;

  if (res[studentId]) {
    res[studentId].scores.push(score);
  } else {
    res[studentId] = {
      studentName,
      scores: [score],
    };
  }

  return res;
}, {});

let filteredByCondition = Object.values(groupedByStudentId).filter(
  ({ scores }) => {
    return getArrayAverage(scores) < 40;
  }
);

console.log(filteredByCondition.map(({ studentName }) => studentName));

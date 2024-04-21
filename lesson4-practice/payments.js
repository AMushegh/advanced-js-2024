const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
  {
    studentId: 3, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 3, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 200,
    year: 2023,
  },
];

// 1
const payedAmountList = payments.map((payment) => payment.payedAmount);
const maxPayment = Math.max(...payedAmountList);

let max = payments[0].payedAmount;
payments.forEach((payment) => {
  if (payment.payedAmount > max) {
    max = payment.payedAmount;
  }
});

console.log(maxPayment, max);

// 2
let sum = 0;
payedAmountList.forEach((payment) => (sum += payment));
console.log(sum);

// 3
let count = payedAmountList.filter((pAmount) => pAmount > 1500).length;
console.log(count);

// 4
console.log(sum / payments.length);

// 5

/**
 * [
 *    {
 *      studentId: id
 *      studentName: nmae
 *      totalAmount: 19023
 *    }
 * ]
 */

// let a = {
//   1: {
//     studentId: 1,
//     studentName: nmae,
//     totalAmount: 19023,
//   },
//   2: {
//     studentId: 2,
//     studentName: nmae,
//     totalAmount: 19023,
//   },
// };

let res1 = {};
payments.forEach((payment) => {
  res1[payment.studentId] ??= {
    studentId: payment.studentId,
    studentName: payment.studentName,
    totalAmount: 0,
  };

  res1[payment.studentId].totalAmount += payment.payedAmount;
});

let res2 = {};
payments.forEach((payment) => {
  if (res2[payment.studentId]) {
    res2[payment.studentId] = {
      studentId: payment.studentId,
      studentName: payment.studentName,
      totalAmount: res2[payment.studentId].totalAmount + payment.payedAmount,
    };
  } else {
    res2[payment.studentId] = {
      studentId: payment.studentId,
      studentName: payment.studentName,
      totalAmount: payment.payedAmount,
    };
  }
});

console.log(Object.values(res1));
console.log(Object.values(res2));

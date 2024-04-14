let number = 123342;

let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;

while (number) {
  const lastDigit = number % 10;

  switch (lastDigit) {
    case 0:
      count0++;
      break;
    case 1:
      count1++;
      break;
    case 2:
      count2++;
      break;
    case 3:
      count3++;
      break;
    case 4:
      count4++;
      break;
    case 5:
      count5++;
      break;
    case 6:
      count6++;
      break;
    case 7:
      count7++;
      break;
    case 8:
      count8++;
      break;
    case 9:
      count9++;
      break;
  }

  number = Math.floor(number / 10);
}

console.log(
  count0,
  count1,
  count2,
  count3,
  count4,
  count5,
  count6,
  count7,
  count8,
  count9
);

function isPalindrome(number) {
  return String(number) === String(number).split("").reverse().join("");
}

function manipulateNumber(number) {
  let arrayOfDigits = String(number).split("").map(Number);

  let res = [];
  for (let i = 0; i < arrayOfDigits.length; i += 2) {
    res.push(arrayOfDigits[i] + (arrayOfDigits[i + 1] ?? 0));
  }

  return +res.reduce((acc, el) => acc + el, "");
}

function findPalindromeRecursive(number) {
  if (String(number).length === 1) {
    return false;
  }

  if (isPalindrome(number)) {
    return true;
  }

  return findPalindromeRecursive(manipulateNumber(number));
}

console.log(findPalindromeRecursive(11211230));
console.log(findPalindromeRecursive(13001120));
console.log(findPalindromeRecursive(23336014));
console.log(findPalindromeRecursive(11));
console.log(findPalindromeRecursive(1692106));
console.log(findPalindromeRecursive(123454321));

// TODO: Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const reverseString = (str) => {
  str = str.split("");
  let revStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  return revStr.join("");
};

// console.log(reverseString("Hello World!"));

// TODO: Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfArray = (arr) => {
  let sum = arr.reduce((prev, curr) => {
    if (curr >= 0) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
  return sum;
};

// console.log(sumOfArray([2, -5, 10, -3, 7, 20, -20]));

// TODO:Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const findMostFrequent = (arr) => {
  const numbersObj = arr.reduce((prev, curr) => {
    if (curr in prev) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

  let frequentNum = Object.keys(numbersObj)[0];

  for (key in numbersObj) {
    if (numbersObj[key] > numbersObj[frequentNum]) {
      frequentNum = key;
    }
  }

  return frequentNum;
};

// console.log(
//   findMostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5, 4, 5, 4, 4, 4, 5, 4, 4])
// );

// TODO: Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.<br />

const findIndice = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    const sum = arr[startIndex] + arr[endIndex];

    if (sum === target) {
      return [startIndex, endIndex];
    } else if (sum < target) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return [];
};

// console.log(findIndice([1, 3, 6, 8, 11, 15], 11));

// TODO: Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Can't divide by zero";
      } else {
        return num1 / num2;
      }
    default:
      return "Invalid Operator";
  }
};

// console.log(calculator(1, 1, "+"));

// TODO:Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const passwordGenerator = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';

  const allChar = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  password += getRandomChar(uppercaseChars);
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(numberChars);
  password += getRandomChar(specialChars);

  for (let i = password.length; i < length; i++) {
    const index = Math.ceil(Math.random() * allChar.length);
    password += allChar[index];
  }

  return password;
};

const getRandomChar = (charSet) => {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
};

// console.log(passwordGenerator(20));

// TODO: Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (romanNum) => {
  romanNum = romanNum.toUpperCase();
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerNumber = 0;
  let prevValue = 0;

  for (let i = romanNum.length - 1; i >= 0; i--) {
    const currentRomanNum = romanNum[i];
    const currentRomanValue = romanNumerals[currentRomanNum];
    if (currentRomanValue < prevValue) {
      integerNumber -= currentRomanValue;
    } else {
      integerNumber += currentRomanValue;
    }
    prevValue = currentRomanValue;
  }
  return integerNumber;
};

// console.log(romanToInteger("vi"));

// TODO: Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[1];
};

// console.log(findSecondSmallest([10, 9, 2, 8, 3, 7, 4, 6, 5, 1]));

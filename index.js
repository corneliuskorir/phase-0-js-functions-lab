function calculateTax(amount) {
  let taxValue = amount * (10 / 100);
  console.log("Tax value: ", taxValue);
  return taxValue;
}

function convertToUpperCase(text) {
  let uppercased = text.toUpperCase();
  console.log("Uppercase: ".uppercased);
  return uppercased;
}

function findMaximum(num1, num2) {
  let maximum;
  if (num1 > num2) {
    maximum = num1;
  } else {
    maximum = num2;
  }
  console.log("The maximum is: ", maximum);
  return maximum;
}

function isPalindrome(word) {
  let isPal = word == word.split("").reverse().join("");
  console.log("Is palindrome: ", isPal);
  return isPal;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discounted = originalPrice - originalPrice * (discountPercentage / 100);
  console.log("Discounted price is: ", discounted);
  return discounted;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};

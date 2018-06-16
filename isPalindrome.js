// Write a function that returns whether a string is a palindrome.
// Reminder: A palindrome is a string that is the same forwards and backwards.

const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('abccba'))
console.log(isPalindrome('shnoork'))

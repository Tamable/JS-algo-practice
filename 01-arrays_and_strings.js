// Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?

const uniqueCharacters = (str) => {
  let strHash = {}
  for (let i = 0; i < str.length; i++) {
    if (strHash[str[i]]) {
      return false
    } else {
      strHash[str[i]] = true
    }
  }
  return true
}


// Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer NOTE: One or two additional variables are fine An extra copy of the array is not

const removeDuplicate = (str) => {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i+1; j < strArr.length; j++) {
      if (strArr[i] == strArr[j]) {
        strArr[j] = ''
      }
    }
  }

  return strArr.join('');
}


// Write a method to decide if two strings are anagrams or not.

const anagramBoolean = (str) => {
  let strArr = str.split('');
  let reversed = strArr.reverse();

  if (str == reversed.join('')) {
    return true
  }

  return false;
}


// Write a method to replace all spaces in a string with ‘%20.’

const replaceSpace = (str) => {
  return str.split(' ').join('%20')
}


// Assume you have a method isSubstring which checks if one word is a substring of another Giventwostrings,s1ands2,writecodetocheckifs2isarotationofs1using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)

// Make a new String by appending the appending the first string with itself
// Check if second string is sub string of new String

const isRotation = (s1, s2) => {
  if (s1.length == s2.length && s1.length > 0) {
    doubleS1 = s1 + s1;
    return isSubstring(doubleS1, s2)
  }

  return false;
}

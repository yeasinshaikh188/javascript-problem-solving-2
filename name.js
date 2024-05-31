// ans no 1 ---------------
function celsiusToFahrenheit(celsius) {
    let celNum = celsius;
    let result = celNum * 9 / 5 + 32;
    return result;

  }

  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77

// ans no 2 ----------------

function isEven(num) {
   if(num % 2 === 0){
    return true;
   }else{
    return false;
   }
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
  // ans no 3 ----------------
  function sum(a, b) {
    const num2 = a + b;
    return num2;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  
// ans no 4 ----------------
function findSmallestNum(arr){
    const array = Math.min(...arr);
  return array;
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// ans no 5 -----------
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let result = 0;
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            result++;
        }
    }
    return result;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3

// 6 ---------------
function getFirstElement(arr) {
    const result = arr[0];
    return result;
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

// 7----------------
function isArrayEmpty(arr) {
   if(arr.length === 0){
     return true;
   }else{
    return false;
   }
  }

  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

// 8--------------


// 9--------------
function reverseString(str) {
    let reversedToString = str.split("").reverse().join('');
    return reversedToString;

  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"


// 10 -------------
function toLowerCase(str) {
    const lowerCase = str.toLowerCase();
    return lowerCase;
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"


// 11-------------
function stringLength(str) {
    const textLenth = str.length;
    return textLenth;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

// 12--------------
function mergeArrays(arr1, arr2) {
    const arrayFlat = arr1.concat(arr2);
    return arrayFlat;
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// 13-------------
function getLastElement(arr) {
    const arrayLastIndex = arr[arr.length -1]
    return arrayLastIndex;
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
// 14-------------
function getFirstCharacter(str) {
    const fristElement = str[0]
    return fristElement;
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"

// 15-----------------
function sumArray(arr) {
    let result = 0;
    if(arr % 2 === 2){
        return result += arr;
    }

  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
  

  
  
  
  
  



  
  

  
  
//In this challenge, I had to create an algorithm for creating an array containing a given range of integers
//One of the requirements was to solve this problem using recursion
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else { 
     var countArray = rangeOfNumbers(startNum, endNum -1);
     countArray.push(endNum);
     return countArray;
  }
};

console.log(rangeOfNumbers(3, 10));
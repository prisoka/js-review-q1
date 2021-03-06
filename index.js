/**
 * @name: add
 * @description returns the result of both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function add(num1,num2){
  return num1+num2;
}

/**
 * @name: subtract
 * @description returns the difference between both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function subtract(num1,num2){
  return num1-num2;
}

/**
 * @name: calculateSum
 * @description calculate the sum of all numbers in array
 * @param1: array
 * @return: number
 **/
 function calculateSum(array){
   let sum = 0;

   for(let i = 0; i < array.length; i++){
     let num = array[i];
     sum += num;
   }
   return sum;
 }

/**
* @name - map
* @description - returns a new array with the results of calling a provided function on every element in the calling array.
* @param - array
* @param - number
* @return - array
**/
function map(arr, num){
  return arr.map(element => element * num);
}
//map([1,2,3],3)  => [3,6,9]
//map([2,3,4],-2) => [-4,-6,-8]

/**
 * @name: filter
 * @description filter elements in an array and return a a new collection with filtered elements
 * @param1: array
 * @return: array
 **/
 function filter(arr){
   return arr.filter(word => word.length > 4)
 }

/**
 * @name: reverseLettersInPlace
 * @description: reversed letters of a string in place
 * @param1: string
 * @return: reversed words of a string in place
 **/
 function reverseLettersInPlace(str){
   return str.split('').reverse().join('').split(' ').reverse().join(' ');
 }
//reverseLettersInPlace("Hi justin") => "iH nitsuj"
//reverseLettersInPlace(" A simple challenge! ") => => " A elpmis !egnellahc "

/**
 * @name: allSimpleCombinations
 * @description:
 * @param1: str
 * @return: array
 **/
 function allSimpleCombinations(str){
   let combined = [];

   for (let i = 0; i < str.length; i++){
     let word = str[i];
     // console.log(word);

     for (let j = i; j < str.length; j++){
       combined.push(word);
       word += str[j+1];
     }
   }
   return combined;
 }
//allSimpleCombinations('cat')  => ['c','ca','cat','a','at','t']
//allSimpleCombinations('talk') => ['t','ta','tal','talk','a','al','alk','l','lk','k'];

/**
 * @name: alphabeticalOrder
 * @description: return the given str in alphabetical order
 * @param1: str
 * @return: string
 **/
 function alphabeticalOrder(str){
   return str.split('').sort().join('');
 }
//alphabeticalOrder('talk') => 'aklt'
//alphabeticalOrder('sailormoon')  => 'ailmnooors'

/**
 * @name: returnLongestWord
 * @description: return the longest word in a given string
 * @param1: string
 * @return: string
 **/
 function returnLongestWord(string) {
   let str = string.split(" ");
   let longest = 0;
   let word = null;
   for (let i = 0; i < str.length; i++) {
     if (longest < str[i].length) {
       longest = str[i].length;
       word = str[i];
     }
   }
   return word;
 }
//returnLongestWord('short sentence alphabetical') => 'alphabetical'
//returnLongestWord('cute pretty beautiful pulchritudinous') => 'pulchritudinous'

/**
 * @name: isPrime
 * @description return true is the number is prime
 * @param1: num
 * @return: boolean
 **/
 function isPrime(number) {
   if (number < 2) {
     return false;
   }

   for (var i = 2; i < number; i++) {
     if (number % i === 0) {
       return false;
     }
   }

   return true;
 }
//isPrime(7)  => true
//isPrime(12) => false

/**
 * @name: returnCoinBreakdown
 * @description: returns and object with how many of each coin the given number fits
 * @param1: num
 * @return: object
 **/
 function returnCoinBreakdown(num){
   let countedCoins = {};
   let spareChange = 0;

   countedCoins[25] = parseInt(num/25);
     spareChange = num % 25;
   countedCoins[10] = parseInt(spareChange/10);
     spareChange = spareChange % 10;
   countedCoins[5] = parseInt(spareChange/5);
     spareChange = spareChange % 5;
   countedCoins[1] = spareChange;

   return countedCoins;
 }
//returnCoinBreakdown(46) => {25:1,10:1,5:2,1:1}
//returnCoinBreakdown(19) => {25:0,10:1,5:1,1:4}

/**
 * @name: countVowels
 * @description returns the number of vowels in a str
 * @param1: string
 * @return: number
 **/
function countVowels(str){
 let counter = 0;
 let vowels = 'aeiouAEIOU'

 for (let i =0; i < str.length; i++){
  if(vowels.indexOf(str[i]) !== -1){
    counter += 1;
  }
 }
 return counter;
}
//countVowels('apple')  => 2
//countVowels('tomato') => 3

// BONUS //
function forEach(){

}

module.exports = {
  add:add,
  subtract:subtract,
  calculateSum:calculateSum,
  map:map,
  filter:filter,
  reverseLettersInPlace:reverseLettersInPlace,
  allSimpleCombinations:allSimpleCombinations,
  alphabeticalOrder:alphabeticalOrder,
  returnLongestWord:returnLongestWord,
  isPrime:isPrime,
  returnCoinBreakdown:returnCoinBreakdown,
  countVowels:countVowels
}

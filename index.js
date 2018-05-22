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
* @description -
* @param -
* @param -
* @return -
**/
function map(){

}
//map([1,2,3],3)  => [3,6,9]
//map([2,3,4],-2) => [-4,-6,-8]

/**
 * @name: filter
 * @description
 * @param1:
 * @param2:
 * @return: a new collection with filtered elements
 **/
function filter(){

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
 * @description
 * @param1:
 * @param2:
 * @return:
 **/
function allSimpleCombinations(){

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
 * @description
 * @param1:
 * @param2:
 * @return:
 **/
function returnLongestWord(){

}
//returnLongestWord('short sentence alphabetical') => 'alphabetical'
//returnLongestWord('cute pretty beautiful pulchritudinous') => 'pulchritudinous'

/**
 * @name: isPrime
 * @description return true is the number is prime
 * @param1: num
 * @return: boolean
 **/
function isPrime(){

}
//isPrime(7)  => true
//isPrime(12) => false

/**
 * @name: returnCoinBreakdown
 * @description
 * @param1: num
 * @return: object
 **/
function returnCoinBreakdown(){

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

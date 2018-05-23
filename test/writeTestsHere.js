const allFunctions = require('../index');
const assert = require('chai').assert;

// In case I wanted to use a different chai library:
// const should = require('chai').should;
// const expect = require('chai').expect;


describe('all tests for your functions',()=>{

  //ADD
  describe('add tests',()=>{
    const addFunc = allFunctions.add;
    it('should add positive numbers',()=>{
      assert.equal(addFunc(1,3),4);
      assert.equal(addFunc(8,2),10);
    });
    it('should add negative numbers',()=>{
      assert.equal(addFunc(-1,-3),-4);
      assert.equal(addFunc(-10,-3),-13);
    });
    it('should output number',()=>{
      assert.isNumber(addFunc(5,5));
    });
  })

  //SUBTRACT
  describe('subtract tests',()=>{
    const subFunc = allFunctions.subtract;

    it('should subtract positive numbers',()=>{
      assert.equal(subFunc(1,3),-2);
      assert.equal(subFunc(100,87),13);
    });

    it('should subtract negative numbers',()=>{
      assert.equal(subFunc(-1,-3),2)
      assert.equal(subFunc(-39,-11),-28)
    });

    it('should output number',()=>{
      assert.isNumber(subFunc(8,1));
    });
  })

  //calculateSum
  describe('calculateSum tests', () => {
    const sumFunc = allFunctions.calculateSum;

    it('should return zero if array is empty', () => {
      assert.equal(sumFunc([]), 0);
    });

    it('should return sum of positive numbers',() =>{
      assert.equal(sumFunc([12,3]),15);
      assert.equal(sumFunc([5,5]),10);
    });

    it('should return sum of negative numbers',() =>{
      assert.equal(sumFunc([-1,-1]),-2);
      assert.equal(sumFunc([-7,-3]),-10);
    });

    it('should output number', () => {
      assert.isNumber(sumFunc([10,10]));
    });
  })

  //map
  describe('map tests', () => {
    const mapFunc = allFunctions.map;

    it('should iterate with all numbers in given array', () => {
      assert.deepEqual(mapFunc([1,2],3),([3,6]))
    });

    it('should return an array of numbers', () => {
      assert.deepEqual(mapFunc([1,2,3],2), ([2,4,6]));
    });
  })

  //filter
  describe('filter tests', () => {
    const filterFunc = allFunctions.filter;

    it('should return empty array if element length is < 4', function (){
      assert.deepEqual(filterFunc(['zap', 'abc']), ([]))
    });

    it('should iterate on each character of an array', function (){
      assert.deepEqual(filterFunc(['pizza', 'zap', 'abc']), (['pizza']))
    });

    it('should return a new array with filtered elements', function() {
      assert.deepEqual(filterFunc(['pizza', 'banana', 'abc']), (['pizza','banana']));
    });
  })

  //reverseLettersInPlace
  describe('reverseLettersInPlace tests', () => {
    const reverseFunc = allFunctions.reverseLettersInPlace;

    it('should reverse the given str with words in the same place', () => {
      assert.equal(reverseFunc('hello world'), 'olleh dlrow');
    })

    it('should output a string', () => {
      assert.equal(reverseFunc('banana and apple'), 'ananab dna elppa');
    });
  })

  //allSimpleCombinations
  describe('allSimpleCombinations tests', () => {
    const simpleCombinationsFunc = allFunctions.allSimpleCombinations;

    it('should output an array of strings', () => {
      assert.deepEqual(simpleCombinationsFunc('dog'), (['d', 'do', 'dog', 'o', 'og', 'g']))
    });
  })

  //alphabeticalOrder
  describe('alphabeticalOrder tests', () => {
    const alphOrderFunc = allFunctions.alphabeticalOrder;

    it('should output string in alphabetical order',() =>{
      assert.equal(alphOrderFunc('azcb'),'abcz');
    });

    it('should output a string', () => {
      assert.equal(alphOrderFunc('walk'), 'aklw');
    });
  })

  //returnLongestWord
  describe('returnLongestWord tests', () => {
    const longestWordFunc = allFunctions.returnLongestWord;

    it('should return string', () => {
      assert.equal(longestWordFunc('oranges and apples'), 'oranges');
    });
  })

  //isPrime
  describe('isPrime  tests', () => {
    const primeFunc = allFunctions.isPrime;

    it('should return a true when the number is prime', () => {
      assert.equal(primeFunc(3), true);
    });

    it('should return a false when the number is not prime', () => {
      assert.equal(primeFunc(12), false);
    });
  })

  // returnCoinBreakdown
  describe('returnCoinBreakdown tests', () => {
    const coinBreakdown = allFunctions.returnCoinBreakdown;

    it('should return 0 to object values if the given number is != 0', () => {
      assert.deepEqual(coinBreakdown(0), {1:0, 5:0, 10:0, 25:0})
    });

    it('should return an object', () => {
      assert.deepEqual(coinBreakdown(3), ({1:3, 5:0, 10:0, 25:0}))
    });
  })

  //countVowels
  describe('countVowels tests', () => {
    const vowelsNumFunc = allFunctions.countVowels;

    it('should return 0 if str is empty', () => {
      assert.equal(vowelsNumFunc(''), 0);
    });

    it('should output number', () => {
      assert.isNumber(vowelsNumFunc('banana'),6);
    });
  })

})

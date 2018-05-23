const assert = require('chai').assert;
const allFunctions = require('../index');

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

  //returnCoinBreakdown

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

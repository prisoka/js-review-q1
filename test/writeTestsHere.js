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
    })
    it('should subtract negative numbers',()=>{
      assert.equal(subFunc(-1,-3),2)
      assert.equal(subFunc(-39,-11),-28)
    })
    it('should output number',()=>{
      assert.isNumber(subFunc(8,1));
    });
  })

  //calculateSum
  describe('calculateSum tests', () => {
    const sumFunc = allFunctions.calculateSum;

    it('should return zero if array is empty', () => {
      assert.equal(sumFunc([]), 0);
    })

    it('should output number', () => {
      assert.isNumber(sumFunc(10,10));
    })
  })

  //forEach
  describe('forEach tests', () => {

    it('should iterate on each character of a string', () => {
      let iterated = '';

      array.forEach('pizza', function(val, i, string) {
        iterated += val;
      });

      assert.deepEqual(iterated, 'pizza');
    })

    it('should iterate on each element of an array', function() {
      var iterated = [];

      array.forEach([1,2,3,4], function(val, i, array) {
        iterated.push(val);
      });

      assert.deepEqual(iterated, [1,2,3,4]);
    });

    it('should iterate on each element of an object', function() {
      var iterated = [];

      array.forEach({a: 1, b: 2, c: 3}, function(val, key, obj) {
        iterated.push(val);
      });

      assert.deepEqual(iterated, [1, 2, 3]);
    });

  })

  //filter
  describe('filter tests', () => {
    it('should iterate on each character of a string', function() {
      let filteredArray = string.filter('pizza', function(val, i, array) {
        return val === 'z';
      });

      assert.deepEqual(filteredArray, ['z', 'z']);
    });

    it('should iterate on each element of an array', function() {
      var filteredArray = array.filter([1,2,3,4], function(val, i, array) {
        return (val % 2) === 0;
      });

      assert.deepEqual(filteredArray, [2, 4]);
    });

    it('should iterate on each element of an object', function() {
      var filteredArray = object.filter({a: 1, b: 2, c: 3}, function(val, key, obj) {
        return (val % 2) === 1;
      });

      assert.deepEqual(filteredArray, [1, 3]);
    });
  })

  //reverseLettersInPlace
  describe('reverseLettersInPlace tests', () => {
    const reverseFunc = allFunctions.reverseLettersInPlace;

    it('should return a string', () => {
      
    })

    it('should return ')
  })

  //allSimpleCombinations

  //alphabeticalOrder

  //returnLongestWord

  //isPrime

  //returnCoinBreakdown

  //countVowels

})

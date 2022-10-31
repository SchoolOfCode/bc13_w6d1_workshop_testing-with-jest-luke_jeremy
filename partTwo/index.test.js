import { test, expect } from "@jest/globals";

import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});



//👉 2.2 - Write your tests for the other functions below:
test(`When 1 is given as an argument, doubleAndAddOne =3`, () => {
  const actual = doubleAndAddOne(1);
  const expected = 3;

  expect(actual).toBe(expected);
});

test('When an array is longer than 10, return true ', () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const expected = true;

   expect(actual).toBe(expected);
});

test('When an array and an item are provided, return the array with the item included in it.', () => {
  const actual = addItemToArray([2, 4, 6, 8], 10);
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toEqual(expected);
})

test('When the function takes in an object, a key and value, it should return an object with the key-value pair as one of its properties', () => {
  const actual = addKeyValuePairToObject({job: "coder", age: 29}, "name", "Dave");
  const expected = {job: "coder", age: 29, name: "Dave"};
  expect(actual).toEqual(expected)

})

test('when an odd integer is passed in, the throwErrorIfEven function should return false.', () => {
  const actual = throwErrorIfEven(3)
  
  expect(actual).toBeFalsy() 
})

// test('When an even integer is passed in, the throwErrorIfEven function should show an error message', () => {
  
//     const actual = throwErrorIfEven(4);
//     // const expected = "Error, 4 is even!";
//     expect(actual).toThrow('Error, 4 is even!');
  
// })

// 1 - Given a matrix, transform it into an arr
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((newArray, array) => newArray
.concat(array), []);

console.log(flatten);

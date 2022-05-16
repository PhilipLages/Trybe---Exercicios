//1:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index <numbers.length; index += 1) {
  console.log(numbers[index]);  
}

// // 2:
let sum = 0;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];  
}
console.log(sum); 

// //3:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let medArit = 0;

for (let index = 0; index < numbers.length; index++) {
  medArit = medArit + numbers[index];
}
console.log(medArit/numbers.length);

// // 4:
if (medArit > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// 5:
let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index++) {  
  if (maiorNumero < numbers[index] ) {
    maiorNumero = numbers[index];
  }  
}
console.log(maiorNumero);

// 6:
let valoresImpares = 0;

for (let index = 0; index < numbers.length; index++) {  
  if (numbers[index] % 2 !== 0) {
    valoresImpares++;
  }
}
console.log(valoresImpares);

// 7:
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index++) {  
  if (menorNumero > numbers[index] ) {
    menorNumero = numbers[index];
  }  
}
console.log(menorNumero);

// 8:
let array = [];

for (let index = 0; index <= 25; index++) {
array.push(index);
}
console.log(array);

// 9:
for (let index = 1; index < array.length; index++) {
  console.log(array[index] / 2);  
}

// Bonus:
// 1:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// 2:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// 3:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }    
  }
  console.log(newArray);
  

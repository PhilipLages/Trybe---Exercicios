//1:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index <numbers.length; index += 1) {
  console.log(numbers[index]);  
}

// // 2:
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  sum = sum + numbers[index];  
}
console.log(sum); 

// //3:
let medArit = 0;

for (let index = 0; index < numbers.length; index++) {
  medArit = medArit + numbers[index] / 10;
}
console.log(medArit);

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

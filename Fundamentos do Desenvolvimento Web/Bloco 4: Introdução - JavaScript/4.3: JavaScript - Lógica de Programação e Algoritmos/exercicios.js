// 1:
let fatorial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valor = 10;
let resultado = valor;

for (let index = 0; index < fatorial.length; index += 1) {
  resultado *= fatorial[index] ;   
}
console.log(resultado);

// 2:
let word = 'tryber';
let backWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    backWord += word[index];    
}
console.log(backWord);

// 3:
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];

for (let index = 0; index < array.length; index += 1) {  
    if (array[index].length > biggestWord.length) {
      biggestWord = array[index];
    }
  }
  console.log(biggestWord);

array = ['java', 'javascript', 'python', 'html', 'css', 'ab'];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {  
    if (array[index].length < smallestWord.length) {
      smallestWord = array[index];
    }
  }
  console.log(smallestWord);

  // 4:
  






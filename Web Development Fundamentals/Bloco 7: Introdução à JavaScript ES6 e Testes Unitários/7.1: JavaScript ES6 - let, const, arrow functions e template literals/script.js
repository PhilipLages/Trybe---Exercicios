// 1:
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// // 2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens[0] = 2;
oddsAndEvens[1] = 3;
oddsAndEvens[2] = 4;
oddsAndEvens[3] = 7;
oddsAndEvens[4] = 10;
oddsAndEvens[5] = 13;

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// // 2 - Bonus:
// Seu código aqui.
const sortNumbers = (array) => {
  const sortArray = array.sort((a, b) => a - b);
  return sortArray;
}
const sortedArray = sortNumbers(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // 

// Parte2
// 1:
const fatorial = number => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result;
}
console.log(fatorial(10));

// // Bonus:
const factorialBonus = number1 => number1 > 1 ? number1 * factorialBonus(number1 - 1) : 1;
console.log(factorialBonus(10));

// // 2:
const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const longestWord = phrase => {
  let phraseArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';
  for (word of phraseArray) {
    if (word.length > maxLength) {
      result = word;
    }
  }  
  return result;
}
console.log(longestWord(phrase));

// 3:

// 4:
const encontrarX = (text) => {
  const mensagem = 'Tryber x aqui!';
  const mensagemCortada = mensagem.split(' ');
  const newArray = [];
  for (let elemento of mensagemCortada) {
    if (elemento === 'x') {
      newArray.push(text);
    } else {
      newArray.push(elemento);
    }
  }
  return newArray.join(' ');
}

console.log(encontrarX('bebeto'));

const skills = ['JavaScript', 'Python', 'CSS', 'HTML', 'React'];

const  habilidades = array => {
  const arrayOrdenado = array.sort();
  let result = encontrarX('bebeto');
  result = `${result} 
  Minhas cinco principais habilidades são: `

  arrayOrdenado.forEach(element => {

  });
}
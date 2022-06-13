// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } 
    return false;
  };


// Desafio 2
function calcArea(base, hight) {
  let area = (base * hight) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
};

// Desafio 4
function concatName(stringsArray) {
  let secondArray = [];  
  for (let index = 0; index < stringsArray.length; index += 1) {
    secondArray.push(stringsArray[stringsArray.length - 1], stringsArray[0]);
    break;
  };
  let string = secondArray.join(", ");  
  return string;
};

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let countNumber = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      countNumber = 1; 
    } else if (numbers[index] === highestNumber) {
      countNumber += 1;      
    }
  };  
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;
  if (distance1 < 0) {
    distance1 = distance1  * (-1);
  } else if (distance2 < 0) {
    distance2 = distance2  * (-1);   
  };
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let string = [];  
  for (let index = 0; index < numeros.length; index  += 1) {     
    if (numeros[index] % 3 === 0 && numeros[index] % 5  !== 0) {
      string.push('fizz');
    } else if (numeros[index] % 5 === 0 && numeros[index] % 3  !== 0) {
      string.push('buzz');
    } else if (numeros[index] % 5 === 0 && numeros[index] % 3  === 0) {
      string.push('fizzBuzz');
    } else {
      string.push('bug!');
    };    
  };  
  return string;
}

// Desafio 9
function encode(letras) {
  let array = letras.split('');
  for (let index = 0; index < array.length; index += 1) {    
    if (array[index] == 'a') {
      array[index] = '1';
    } else if (array[index] === 'e') {
      array[index] = '2';
    } else if (array[index] === 'i') {
      array[index] = '3';
    } else if (array[index] === 'o') {
      array[index] = '4';
    } else if (array[index] === 'u') {
      array[index] = '5';
    };
  }  
  let message = array.join('');
  return message;
}

function decode(letras) {
  let array = letras.split('');
  for (let index = 0; index < array.length; index += 1) {    
    if (array[index] == '1') {
      array[index] = 'a';
    } else if (array[index] === '2') {
      array[index] = 'e';
    } else if (array[index] === '3') {
      array[index] = 'i';
    } else if (array[index] === '4') {
      array[index] = 'o';
    } else if (array[index] === '5') {
      array[index] = 'u';
    };
  }  
  let message = array.join('');
  return message;
}

// Desafio 10
function techList(arrTech, name) {
  let orderedArray = arrTech.sort();
  let techListName = [];
  if (arrTech.length == 0) {
    return 'Vazio!';
  } else if (arrTech.length > 0) {
    for (index = 0; index < orderedArray.length; index += 1) {
      techListName.push({tech: orderedArray[index], name: name});
    }
  }
  return techListName;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

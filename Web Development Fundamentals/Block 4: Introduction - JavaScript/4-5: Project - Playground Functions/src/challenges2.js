// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
    };
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }    
    let countNumber = 0;      
    for (index2 = 0; index2 < numbers.length; index2 += 1) {     
      if (numbers[index2] === numbers[index]) {        
        countNumber += 1;      
        };  
    }
      if (countNumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      };        
    }; 
  let phoneNumber = `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7).join('')}`;
  return phoneNumber;
};   


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  } else if (lineA < (Math.abs(lineB - lineC)) || lineB < (Math.abs(lineA - lineC)) || lineC < (Math.abs(lineB - lineA))) {
    return false;
  } else if (lineA < (lineB + lineC) || lineB < (lineA + lineC) || lineC < (lineB + lineA)) {
    return true;
  } else if (lineA > (Math.abs(lineB - lineC)) || lineB > (Math.abs(lineA - lineC)) || lineC > (Math.abs(lineB - lineA))) {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  let stringNumbers = string.replace(/\D/g, "");  
  let sumStringNumbers = 0;

  for (index = 0; index < stringNumbers .length; index += 1) {
    sumStringNumbers += Number(stringNumbers[index]);    
  }  
  if (sumStringNumbers < 2) {
    return (sumStringNumbers + ' copo de água');
  } else if (sumStringNumbers > 1){
    return (sumStringNumbers + ' copos de água');
  }  
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

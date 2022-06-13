// Parte 1 - Objetos e For/In:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1:
console.log("Bem vinda, " + info.personagem);

// 2:
info['recorrente'] = 'Sim';
console.log(info);

// 3:
for (let key in info) {
  console.log(key);
};

// 4:
for (let key in info) {
  console.log(info[key]);
};

// 5:
info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {  
  
};

// 6:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// let livroFavorito = leitor.livrosFavoritos[0];
// console.log('O livro favorito de ' + ' ' + leitor['nome'] + ' ' + leitor['sobrenome'] + 'se chama' + leitor.livrosFavoritos[0]['titulo']);

// 7:
leitor.livrosFavoritos.push ( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
);
// console.log(leitor['livrosFavoritos']);

// 8:
console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos");

// Parte 2 - Funções:

// 1:
function verificaPalindromo(palavra) {
  let palindromo = '';
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    palindromo += palavra[index];      
  }
  if (palavra === palindromo) {    
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindromo('carro'));

// 2:
function encontraIndiceMaiorValor(array) {  
  let indiceMaiorValor = 0;
  for (let index in array) {    
    if (array[index] > array[indiceMaiorValor]) {
      indiceMaiorValor = index;
    }        
  }
  return indiceMaiorValor;
}
console.log(encontraIndiceMaiorValor([2, 3, 6, 7, 10, 1]));

// 3:
function encontraIndiceMenorValor(array) {  
  let indiceMenorValor = 0;
  for (let index in array) {    
    if (array[index] < array[indiceMenorValor]) {
      indiceMenorValor = index;
    }        
  }
  return indiceMenorValor;
}
console.log(encontraIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

// 4:
function AchaMaiorNome(nomes) {
  let maiorNome = nomes[0];
  for (let index in nomes) {
    if (nomes[index].length > maiorNome.length) {
      maiorNome = nomes[index];
    }    
  }
  return maiorNome;  
}
console.log(AchaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5:
function achaRepeticao(numbers) {
  let maisRepete = numbers[0];
  for (let number in numbers) {
      
  }
}
  


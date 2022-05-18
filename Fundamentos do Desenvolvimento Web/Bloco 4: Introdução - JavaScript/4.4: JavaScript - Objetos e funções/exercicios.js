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
console.log('O livro favorito de ' + ' ' + leitor['nome'] + ' ' + leitor['sobrenome'] + 'se chama' + leitor.livrosFavoritos[0]['titulo']);

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
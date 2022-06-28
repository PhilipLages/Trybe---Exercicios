const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produce the same result as the code, but using array destructuring to collect the function and greeting.

const [string, log] = saudacoes;

console.log(string);

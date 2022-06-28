// 5- Given an array of names, return the number of times the letter 'a' appears in upper or lower case.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Add your code here:
const aCount = names.reduce((acc, curr) => {
  let count = 0;
  count += curr.includes('a') ? 1: 0;
});

console.log(aCount);
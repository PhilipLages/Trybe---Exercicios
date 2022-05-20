// Parte 1
// 1:
let position = document.getElementById('elementoOndeVoceEsta');
// 2:
position.parentNode.style.backgroundColor = 'red';
// 3:
let text = document.getElementById('primeiroFilhoDoFilho');
text.innerText = 'Testando, som!';
// 4:
let firstChild = document.getElementById('pai').firstElementChild;
// 5:
let previousPosition = position.previousElementSibling;
// 6:
let atencao = position.nextSibling;
// 7:
let thirdChild = position.nextElementSibling;
// 8:
let fatherThirdChild = document.getElementById('pai').lastElementChild.previousElementSibling;

// Parte 2:
// 1:
let brotherOf = document.getElementById('pai');
let brotherName = document.createElement('div');
brotherOf.appendChild(brotherName);
// 2:
let childOf = position;
let childName = document.createElement('div');
childName.className = 'terceiroFilhodoFilho';
childOf.appendChild(childName);
// 3:
let sonOfSon = text;
let sonOfSonName = document.createElement('div');
sonOfSonName.className = 'primeiroFilhodoFilhodoFilho';
sonOfSon.appendChild(sonOfSonName);
// 4:
let findThirdChild = document.querySelector('#primeiroFilhoDoFilho div').parentNode.parentNode.nextElementSibling;







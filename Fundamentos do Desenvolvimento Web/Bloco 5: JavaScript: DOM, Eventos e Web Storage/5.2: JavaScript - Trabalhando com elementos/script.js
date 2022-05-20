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






// 1:
function textChange () {
  let parag = document.getElementsByTagName('p');
  parag[0].innerText = 'Estarei em um bom emprego';
}
textChange();

// 2:
function changeYellowToGreen () {
  let changeColor1 = document.getElementsByClassName('main-content');
  changeColor1[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeYellowToGreen();

// 3:
  function changeRedToWhite () {
    let changeColor2 = document.getElementsByClassName('center-content');
    changeColor2[0].style.backgroundColor = 'white';
  }
  changeRedToWhite();

  // 4:
  function changeH1 () {
    let title = document.getElementsByClassName('title');
    title[0].innerHTML = 'Exercício 5.1 - JavaScript: DOM e Seletores';
  }
  changeH1();

  // 5:
function upperCase () {
  let changeCase = document.getElementsByTagName('p');
  changeCase[0].style.textTransform = 'upperCase';
}
upperCase();

// 6:
function showTags () {
  let tags = document.getElementsByTagName('p');
  for (index = 0; index < tags.length; index += 1) {
    console.log(tags[index].innerHTML);
  }  
};
showTags();

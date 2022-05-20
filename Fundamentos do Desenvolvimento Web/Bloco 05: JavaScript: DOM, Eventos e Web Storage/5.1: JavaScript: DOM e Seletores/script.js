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
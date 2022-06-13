function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1:
function createNewTag(tag, element, value){         
  let createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
};

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysList = document.getElementById('days');

for (let day = 0; day < dezDaysList.length; day += 1) {
  let listDay = dezDaysList[day];
  let list = createNewTag('Li', 'class', 'day');
  list.innerText = listDay;
  list.style.backgroundColor = 'rgb(238, 238, 238)';
  if (dezDaysList[day] === 25) {
    list.setAttribute('class', 'days holiday friday')    
  } else if (dezDaysList[day] === 24 || dezDaysList[day] === 31 ) {
    list.setAttribute('class', 'day holiday')
  } else if (dezDaysList[day] === 4 || dezDaysList[day] === 11 || dezDaysList[day] === 18) {
    list.setAttribute('class', 'day friday')
  };
  daysList.appendChild(list);
};

// 2:
const findButtons = document.querySelector('.buttons-container');
function createHolidayButton (Feriados) {
  let holidayButton = findButtons.appendChild(createNewTag('button', 'id', 'btn-holiday'));
  holidayButton.innerText = Feriados;
}
createHolidayButton('Feriados');

// 3:
const holidayButton = document.querySelector('#btn-holiday');
const holidayColor = document.querySelectorAll('.holiday');
function changeHolidayColor() {
  for (let holiday = 0; holiday < holidayColor.length; holiday += 1) {
    if (holidayColor[holiday].style.backgroundColor === 'rgb(238, 238, 238)') {
      holidayColor[holiday].style.backgroundColor = 'lightGreen';
    } else {
      holidayColor[holiday].style.backgroundColor = 'rgb(238, 238, 238)';
    }
    }
  }
holidayButton.addEventListener('click', changeHolidayColor);

// 4:
function createFridayButton(Friday) {
  let fridayButton = findButtons.appendChild(createNewTag('button', 'id', 'btn-friday'));
  fridayButton.innerText = Friday;
};
createFridayButton('Sexta-Feira');

// 5:
const fridayButton = document.querySelector('#btn-friday');
const fridayText = document.querySelectorAll('.friday');
const fridays = ['4', '11', '18', '25'];
function changeFridayText() {
  
}
  

fridayButton.addEventListener('click', changeFridayText);






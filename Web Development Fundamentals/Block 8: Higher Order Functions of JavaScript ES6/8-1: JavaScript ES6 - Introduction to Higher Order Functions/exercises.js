// 1 - Create a function that returns an object in the format { nameFullName, email } representing a new hire. Pass your function as a parameter of the HOF newEmployees to create each person hired in its respective id. Your function should receive as a parameter the full name of the person employee and from it automatically generate an email in the format person_name@trybe.com.

const personInfo = (personName) => ({
  nomeCompleto: personName,
  email: () => `${personName.toLowerCase().replace(' ', '_')}@trybe.com`,  
});

const newEmployees = (callback, name1, name2, name3) => {
  const employees = {
    id1: callback(name1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback(name2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback(name3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// 2 - Develop an HOF that returns the result of a draw. This HOF will generate a random number between 1 and 5 receiving as parameters the bet number and a function that checks if the bet number is equal to the drawn number. The return of your HOF should be a string (e.g. "Try again" or "Congratulations you won").


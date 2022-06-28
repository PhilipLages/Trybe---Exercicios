// 1 - We have two objects, one with the personal information of a user person, and another with information regarding the position of this user person in the trappistEnterprise company. We need to create a third object, which will have the personal data and the job data together. To do this use the spread operator.

// 2 - With the object in hand, print a sentence on the console using the data from the object created earlier. To do this, use the object unstructure in conjunction with template literals.
// Example: "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic".
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const worker = {...user, ... jobInfos};

const {name, age, nationality, profession, squad, squadInitials} = worker;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
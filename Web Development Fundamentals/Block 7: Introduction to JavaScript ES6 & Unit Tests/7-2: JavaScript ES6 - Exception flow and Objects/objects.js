// Part 2:
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order['name'];
    const customerPhone = order['phoneNumber'];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
  
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  }
  
  customerInfo(order);


customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);

// Part 3:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Add key and values to an object:
const addNightShift = (object, key, value) => {
  object[key] = value;
}

addNightShift(lesson2, 'turno', 'noite');

console.log(lesson2);

// List an object keys:
const objKeys = obj => Object.keys(obj);

console.log(objKeys(lesson3));

// Show an object length:
const objLength = obj => Object.keys(obj).length;

console.log(objLength(lesson3));

// Show object values:
const objValues = obj => Object.values(obj);

console.log(objValues(lesson2));

// Using Object.assign:
const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Return total number of students:
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  console.log(array);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;    
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Get key value based on its position in an object:
const getValueByPosition = (obj,index) => Object.values(obj)[index];
console.log(getValueByPosition(lesson2, 2));

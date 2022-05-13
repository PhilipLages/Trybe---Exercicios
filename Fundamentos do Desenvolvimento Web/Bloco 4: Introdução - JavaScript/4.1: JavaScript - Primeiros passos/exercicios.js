//1:
const a = 5;
const b = 7;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2:
const numA = 50;
const numB = 65;

if ( numA > numB) {
  console.log(numA);
} else {
  console.log(numB);
}

//3:
const num1 = 35;
const num2 = 75;
const num3 = 50;

if ( num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

//4:
const numb1 = 80;

if (numb1 < 0) {
  console.log("negative");
} else if (numb1 > 0) {
  console.log("positive");
} else {
  console.log("zero");
}

//5:
const ang1 =  90;
const ang2 =  30;
const ang3 =  50;

if ((ang1 + ang2 + ang3) == 180) {
  console.log(true);
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("error");
} else {
  console.log(false);
}



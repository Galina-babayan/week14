//-----стрелочная функция----------------

const showMessage = () => {
  let userName = prompt("Напиши свое имя");
  let message = "Привет, " + userName + "!";
  alert(message);
};

// function showMessage() {
//   let userName = prompt("Напиши свое имя");
//   let message = "Привет, " + userName + "!";
//   alert(message);
// }

//-----Калькулято - вариант 1-----------------------

function calcSum() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = +a + +b;
  let message = "Сумма равна " + c;

  alert(message);
}

function calcSubt() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a - b;
  let message = "Разность равна " + c;
  alert(message);
}
function calcMult() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a * b;
  let message = "Произведение равно " + c;
  alert(message);
}
function calcQuot() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a / b;
  let message = "Частное от деления равно " + c;
  alert(message);
}

function select(sender) {
  sender.classList.add("selected");
}

//---------------calculator-вариант 2----------------

function showName() {
  let d = document.querySelector("#name1").value;
  document.querySelector(".show-name").textContent = `Привет, ${d}!`;
}

function calcS() {
  let x = Number(document.querySelector("#number1").value);
  let y = Number(document.querySelector("#number2").value);
  let z = x + y;
  document.querySelector(".sum").textContent = `Сумма равна: ${z}`;
}

function calcSub() {
  let x = Number(document.querySelector("#number3").value);
  let y = Number(document.querySelector("#number4").value);
  let z = x - y;
  document.querySelector(".sub").textContent = `Разность равна: ${z}`;
}

function calcM() {
  let x = Number(document.querySelector("#number5").value);
  let y = Number(document.querySelector("#number6").value);
  let z = x * y;
  document.querySelector(".m").textContent = `Произведение равно: ${z}`;
}

function calcQ() {
  let x = Number(document.querySelector("#number7").value);
  let y = Number(document.querySelector("#number8").value);
  let z = x / y;
  document.querySelector(".q").textContent = `Частное равно: ${z}`;
}

//----Калькулятор-вариант 3----------------

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const div1 = document.querySelector("#result");

function getValueInput() {
  console.log(input1.value);
  input1.value = "";
}

function Sum() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = +inputFirstValue + +inputSecondValue;
  div1.textContent = `Сумма чисел равна: ${result}`;

  input1.value = "";
  input2.value = "";
}

function Clear() {
  div1.textContent = "";
}

function Sub() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue - inputSecondValue;
  div1.textContent = `Разность чисел равна: ${result}`;

  input1.value = "";
  input2.value = "";
}

function Mult() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue * inputSecondValue;
  div1.textContent = `Произведение чисел равно: ${result}`;

  input1.value = "";
  input2.value = "";
}

function Quot() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue / inputSecondValue;
  div1.textContent = `Частное равно: ${result}`;

  input1.value = "";
  input2.value = "";
}

//---слайдер - не получается толком

function NextImg() {
  document.querySelector(".image").src = "../images/DSC08472.JPG";
}

function PreviousImg() {
  document.querySelector(".image").src = "../images/DSC08513.JPG";
}

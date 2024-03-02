// let son = +prompt("son kiriting");
// for (i = 1; i <= 10; i++) {
// console.log(`${i}*${son}=${son * i}`);
// }
// let alisherdagi_pul = +prompt("Nechpulingiz bor ekanligini kiriting (so'mda)");
// let result = 750 * 11000.34 + 120 * 12354.03;
// if (result <= alisherdagi_pul) {
//   console.log("Oq yo'l");
// }
// if (result > alisherdagi_pul) {
//   console.log("Sabir qil alisher");
// }

let belgi = prompt("belgini kiriting");
let son_1 = +prompt("son kiriting");
let son_2 = +prompt("son kiriting");
let plus_result = son_1 + son_2;
let minus_result = son_1 - son_2;
let boluv_result = son_1 / son_2;
let kopaytruv_result = son_1 * son_2;
let qoldiqlik_buluv_result = son_1 % son_2;
switch (belgi) {
  case "+":
    console.log(` ${son_1} + ${son_2} = ${plus_result}`);
    break;
  case "-":
    console.log(` ${son_1} - ${son_2} = ${minus_result}`);
    break;
  case "/":
    console.log(` ${son_1} / ${son_2} = ${boluv_result}`);
    break;
  case "*":
    console.log(` ${son_1} * ${son_2} = ${kopaytruv_result}`);
    break;
  case "%":
    console.log(` ${son_1} % ${son_2} = ${qoldiqlik_buluv_result}`);
}

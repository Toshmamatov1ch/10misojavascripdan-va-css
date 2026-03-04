// 1-masala  !10 yani 10 faktorialni hisoblash faktorial degani 1*2*3*...10 degani
// let natija = 10;

// for (let d = 1; d <= 10; d++) {
//   natija *= d;
//   if (d == 10) {
//     console.log(natija);
//   }
// }

// >=========================================================================

// 2-masala karra jadvalini chiqarish  daftar orqasidagidek.

// for (let d = 2; d <= 9; d++) {
//   console.log("--- " + d + " lik karra jadvali ---");
//   for (let n = 1; n <= 10; n++) {
//     console.log(`${d} * ${n} = ${d * n}`);
//   }
// }

// >========================================================================

// 3-masala 1dan 10gacha sonlar kvadratini chiqarish

// for (d = 1; d <= 10; d++) {
//   console.log(`${d} * ${d} = ${Math.pow(d, 2)}`);
// }

// >========================================================================

//4-masala 1dan 50gacha techta juft son borligini va nechta toq son borligini chiqarish

// let juftSoni = 0;
// let toqSoni = 0;

// for (let d = 1; d <= 50; d++) {
//   if (d % 2 === 0) {
//     juftSoni++;
//   } else {
//     toqSoni++;
//   }
// }

// console.log("Juft sonlar soni: " + juftSoni + " ta");
// console.log("Toq sonlar soni: " + toqSoni + " ta");

// >=====================================================================================

//5-masala  foydalanuvchi son kiritadi uni tub yoki tub son emasligini aniqlash tub son degani faqat 1ga va o'ziga bo'linadigan son,

// let user = +prompt("Son kiritng");

// if (user % 2 === 1) {
//   console.log("Bu tub son");
// } else {
//   console.log("Bu tub son emas");
// }

// >====================================================================================

// 6-masala 1 dan 100 gacha sonlar ichida 7 ga qoldiqsiz boâ€˜linadigan sonlarni chiqarish

// for (d = 1; d <= 100; d++) {
//   if (d % 7 === 0) {
//     console.log(d);
//   }
// }

// >=====================================================================================

//7-masala 1 dan 50 gacha sonlar ichida 3 ga ham 5 ga ham boâ€˜linadigan sonlarni chiqarish bir vaqtda ham 3ga ham 5ga bolinadigan

// for (d = 1; d <= 50; d++) {
//   if (d % 3 === 0 && d % 5 === 0) {
//     console.log(d);
//   }
// }

// >================================================================================

// 8-masala  1 dan 100 gacha sonlar ichida juft sonlar yigâ€˜indisini topish

// let yigindi = 0;

// for (let d = 1; d <= 100; d += 2) {
//   yigindi += d;
// }

// console.log(yigindi);

// >=================================================================================

// 9-masala  shu korinishda chiqsin
// output
// 12
// 123
// 1234
// 12345

// console.log("output");
// for (let d = 2; d <= 5; d++) {
//   let qator = "";

//   for (let n = 1; n <= d; n++) {
//     qator += n;
//   }

//   console.log(qator);
// }

// >======================================================================================

// 10-masala  1dan 50gacha bolgan sonlar orasida toqlarini 3ga qoldiqsiz bolinadiganlarini yegindisini hisoblash  bu degani ham toq bolsin ham 3ga qoldiqsiz bolinsin degani
// let reslt = 0;
// for (let d = 1; d <= 50; d++) {
//   if (d % 2 !== 0 && d % 3 === 0) {
//     reslt += d;
//   }
// }

// console.log("Sonlar yig'indisi: ", reslt);

// >==============================================================================================

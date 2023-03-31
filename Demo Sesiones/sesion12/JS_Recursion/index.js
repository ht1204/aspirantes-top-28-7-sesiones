// O(n) Time Complexity
// O(1) + O(1) + O(n) + O(1) => O(n)
// function factorial(num) {
//   if (num <= 1) return 1; //O(1)
//   let fact = 1; // O(1)
//   for (let index = 1; index <= num; index++) {
//     //O(n)
//     fact *= index;
//   }

//   return fact; // O(1)
// }


// O(n!) Time Complexity
// function factorial(num) {
//   let fact = num; // O(1)

//   if (fact <= 1) return 1; // O(1)

//   //O(n)
//   for (let i = 0; i < num; i++) {
//     fact = num * factorial(num - 1); //O(n!)
//   }
//   // O(n) => O(n!) => O(n!)
//   return fact;
// }

// O(1) + O(n!) => O(n!)
// function factorial(num) {
//     if(num <= 1) return 1; //O(1)
//     return num * factorial(num - 1); //O(n!)
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(10));

// O(n)
// 5*O(1)+O(n) => O(1) + O(n) => O(n)
// function fibonacci(num) {
//   if (num <= 1) return num; // O(1)

//   let prev2 = 0; // O(1)
//   let prev1 = 1; // O(1)
//   let fibTerm = 0; // O(1)

//   for (let i = 2; i <= num; i++) {
//     // O(n)
//     fibTerm = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = fibTerm;
//   }

//   return fibTerm; //O(1)
// }

// O(1) + O(2^n) => O(2^n)
// function fibonacci(num) {
//   if (num < 2) return num; //O(1)
//   return fibonacci(num - 1) + fibonacci(num - 2); //O(2^n)
// }

// //O(n)
// for (let index = 0; index <= 10; index++) {
//     console.log(fibonacci(index));
// }

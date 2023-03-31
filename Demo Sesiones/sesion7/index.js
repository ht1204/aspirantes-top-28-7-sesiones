const arr = [1, 2, 3, 4, 5];

/*

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

// arr.forEach(item => {
//     console.log("item: ", item);
// });

// const arr_filtered = arr.filter(item => item % 2 === 0);
// console.log(arr_filtered);

// const arr_plus = arr.map(item => {
//     return item + 1;
// });

// console.log(arr_plus);



// bubble sort
// let arr_sorted = arr;
// for (let i = 0; i < arr_sorted.length; i++) {
//   for (let j = 0; j < i; j++) {
//     let aux = arr_sorted[i];
//     arr_sorted[i] = arr_sorted[j];
//     arr_sorted[j] = aux;
//   }
// }

/*
const arr_sorted = arr.sort((a,b) => b - a);
console.log(arr_sorted);
console.log(arr_sorted.at(0));
console.log(arr_sorted[0]);
*/

console.log(arr.shift());
arr.unshift(6);
console.log(arr);
console.log(arr.splice(1,3));

const str_arr = ['Make', 'It', 'Real'].join(' ');
console.log(str_arr);

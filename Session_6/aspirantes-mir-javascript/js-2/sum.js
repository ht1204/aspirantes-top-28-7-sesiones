// escribe la función sum acá
const sum = function(arr) {
    /*
        if(!arr.length) return 0;

        let acum = 0;
        for(let i = 0; i < arr.length; i++){
            acum += arr[i];
        }

        return acum;
    */
    return !arr.length ? 0 : arr.reduce((acum, item) => acum + item, 0);
}


console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0

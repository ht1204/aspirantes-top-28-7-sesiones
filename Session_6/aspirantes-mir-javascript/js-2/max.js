const max = function(arr) {
   /*
    if (!arr.length) return undefined;

    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]) max = arr[i];
    }

    return max;
    */
    return !arr.length ? undefined : Math.max(...arr);
}



console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined

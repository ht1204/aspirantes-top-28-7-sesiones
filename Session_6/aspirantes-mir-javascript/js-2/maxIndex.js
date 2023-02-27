const maxIndex = function(arr) {

    if(!arr.length) return -1;

    let max_index = 0;
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]) {
            max = arr[i];
            max_index = i;
        }
    }
    return max_index;
}



console.log(maxIndex([1, 3, 2])); // 3
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(maxIndex([])); // -1

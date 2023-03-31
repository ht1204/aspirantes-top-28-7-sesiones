/*

function maxIndex(numbers) {
    if (numbers.length < 1) {
        return -1;
    } else {
        let resultIndex = 0;
        let lastHigher = 0;
        let iteratorOfNotNumbers = 0;

        numbers.forEach((element, index) => {
            if (!isNaN(element)) {
                if (element > lastHigher) {
                    lastHigher = element;
                    resultIndex = index;
                }
            } else {
                iteratorOfNotNumbers++;
            }
        });

        if (iteratorOfNotNumbers === numbers.length) {
            return -1;
        } else {
            return resultIndex;
        }
    }
}

*/

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

/*

function max(numbers) {
    if (numbers.length < 1) {
        return undefined;
    } else if (numbers.length === 1) {
        if (isNaN(numbers[0])) {
            return undefined;
        } else {
            return numbers[0];
        }

    } else {
        let result = 0;
        let comparatorOfNotNumbers = 0;

        numbers.forEach(element => {
            if (!isNaN(element)) {
                if (element > result) {
                    result = element;
                }
            } else {
                comparatorOfNotNumbers++;
            }

        });

        if (comparatorOfNotNumbers === numbers.length) {
            return undefined;
        } else {
            return result;
        }
    }
}

*/

const max = function (arr) {
  /*
    if (!arr.length) return undefined;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
*/
  return !arr.length ? undefined : Math.max(...arr);
};

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined

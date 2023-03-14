/*
function join(arrayToJoin) {
    if (!arrayToJoin.length) return "";  //! se toma como un "=== 0", es decir, no tiene longitud

    let finalText = "";
    for (let i of arrayToJoin) {
        finalText = finalText + i + ' ';
    }

    return finalText;
}

*/


const join = function(arr){
    if(!arr.length) return "";

    let str = "";

    for(let word of arr) {
        str += word +" ";
    }

    return str;
}

console.log(join(["Make", "It", "Real"]));
console.log(join(["Coding", "Dreams"]));
console.log(join([]));



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



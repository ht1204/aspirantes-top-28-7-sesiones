function bmi(peso, estatura) {
    return peso > 0 && estatura > 0 ?
        peso / Math.pow(estatura, 2) :
        0;
}


console.log(bmi(65, 1.8)); // 20.061728395061728
console.log(bmi(72, 1.6)); // 28.124999999999993
console.log(bmi(52, 1.75)); //  16.979591836734695


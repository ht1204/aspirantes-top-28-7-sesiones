/*
function calcuarColor() {
  var color;
  if (num === 1) {
    color = "black";
  } else (num = 2) {
    color = "blanco":
  } else if (num === 3) {
    color = "rojo";
  } else {
    color: "verde";
  }

  return "El color es " + color;
}

 */

/*
// Original refactor
function calcularColor(num) {
  let color = "";
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}
 */

// Proposed refactor
function calcularColor(num) {
    const msg = "El color es ";
    const colorMessage = {
        1: [msg, " negro"].join(""),
        2: [msg, " blanco"].join(""),
        3: [msg, " azul"].join(""),
    }

    return (num >= 1 && num <= 3) ?
            colorMessage[num] :
            [msg, " verde"].join("");
}



console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

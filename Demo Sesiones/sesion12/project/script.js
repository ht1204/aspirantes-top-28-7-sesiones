// Get the container element from the HTML document
const container = document.getElementById('container');

// Get form input value and submit button
const squareInput = document.getElementById('square-input');
const squareInputBtn = document.getElementById('square-input-btn');

squareInputBtn.addEventListener('click', generateSquare);


function generateSquare(event) {
    event.preventDefault();
    const numberSquares = parseInt(squareInput.value) || 0;

    if (container.hasChildNodes()) container.innerHTML = '';

    createSquares(numberSquares);
    squareInput.value = '';
}

// Define a non recursive function to create and manipulate squares: O(n)
// function createSquares(n) {
//   if (n === 0) return; // O(1)

//   for (let i = 0; i < n; i++) { // O(n)
//     // Create a new square element
//     const square = document.createElement('div');
//     square.className = 'square';
//     // Add the square element to the container element
//     container.appendChild(square);
//   }
// }




// Define a recursive function to create and manipulate squares: O(n!)
function createSquares(n) {
  // Base case: stop creating squares if n is 0
  if (n === 0) {
    return;
  }

  // Create a new square element
  const square = document.createElement('div');
  square.className = 'square';

  // Add the square element to the container element
  container.appendChild(square);

  // Recursively call createSquares with n-1
  createSquares(n - 1);

}


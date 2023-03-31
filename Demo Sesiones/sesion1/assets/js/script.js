const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (event) {
    h1.textContent = 'Hello!';
    alert("Hi, I'm an event!");
});

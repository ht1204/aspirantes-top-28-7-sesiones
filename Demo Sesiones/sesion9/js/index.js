console.log(window.document.title);
console.log(document.title);

let div = document.querySelector('div');
console.log(div.children);
console.log('childNodes: ', div.childNodes);
div.className = 'block';

const divChildren = div.getElementsByTagName('p');
console.log('divChildren: ', divChildren);
console.log(divChildren[0].innerText);

const btnTrigger = document.getElementById('btn-trigger');
console.log(btnTrigger);

function loggerWarning() {
  console.log("I'm a tiggered function");
}

btnTrigger.addEventListener('click', function () {
  // alert("Hello, I'm an event");
  const articleBlock = document.getElementById('article-block');
  articleBlock.classList.toggle('margin-article');
  loggerWarning();
});

const toAdd = document.getElementsByClassName('block-add')[0];
console.log(toAdd);
for (let i = 0; i < 3; i++) {
  let newDiv = document.createElement('div');
  newDiv.id = ['r', i + 1].join('');
  newDiv.className = 'ansbox';
  toAdd.appendChild(newDiv);
}

const blockAdd = document.getElementsByClassName('block-add')[1];
console.log(blockAdd);
const btnBlockAdd = document.createElement('button');
btnBlockAdd.innerText = 'Created Button';
btnBlockAdd.id = 'btn-created';
// btnBlockAdd.ondblclick = () => alert("I'm a created button");
blockAdd.appendChild(btnBlockAdd);
blockAdd.className = 'position';

const btnCreated = document.getElementById('btn-created');
btnCreated.addEventListener('dblclick', () => {
  const textInput = document.querySelector('#text-input');
  textInput.value = 'Changed Value through button';
});

const textField = document.querySelector('#text-field');
const txtDuplicate = document.querySelector('#txt-duplicate');
console.log(textField);
textField.addEventListener('input', function () {
  const texto = this.value;
  txtDuplicate.textContent = texto;
});


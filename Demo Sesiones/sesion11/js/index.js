onload = function () {
    showData();
}

const btnSave = document.getElementById("btn-save");
btnSave.addEventListener('click', saveData);

function saveData() {
  // Get the input values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    // Create an object to store the data
    const data = {
      name,
      email,
      phone,
    };

    // Save the data to local storage
    localStorage.setItem(name, JSON.stringify(data));

    // Clear the form
    document.getElementById('form').reset();

    // Show the saved data
    showData();
  } else {
    alert('Please, fill all the form fields!');
  }
}

function deleteData(name) {
  // Remove the data from local storage
  localStorage.removeItem(name);

  // Show the updated data
  showData();
}

function editData(name) {
  // Get the data from local storage
  const data = JSON.parse(localStorage.getItem(name));

  // Populate the form with the data
  document.getElementById('name').value = data.name;
  document.getElementById('email').value = data.email;
  document.getElementById('phone').value = data.phone;

  // Remove the old data from local storage
  localStorage.removeItem(name);
}

function showData() {
  // Get the container for the data
  const container = document.getElementById('data');

  // Clear the container
  container.innerHTML = '';

  // Loop through the data in local storage
  for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const data = JSON.parse(localStorage.getItem(name));

    // Create a row for the data
    const row = document.createElement('tr');

    // Add the name to the row
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    // Add the email to the row
    const emailCell = document.createElement('td');
    emailCell.textContent = data.email;
    row.appendChild(emailCell);

    // Add the phone to the row
    const phoneCell = document.createElement('td');
    phoneCell.textContent = data.phone;
    row.appendChild(phoneCell);

    // Add the edit button to the row
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener(
      'click',
      (function (name) {
        return function () {
          editData(name);
        };
      })(name)
    );
    const editCell = document.createElement('td');
    editCell.appendChild(editButton)
    row.appendChild(editCell);

    // Add the delete button to the row
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener(
      'click',
      (function (name) {
        return function () {
          deleteData(name);
        };
      })(name)
    );
    const deleteCell = document.createElement('td');
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Add the row to the container
    container.appendChild(row);
  }
}

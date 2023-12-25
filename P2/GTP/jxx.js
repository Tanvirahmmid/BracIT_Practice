var personTableBody = document.getElementById("personTableBody");
var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
  var nameInput = document.getElementById("nameInput");
  var ageInput = document.getElementById("ageInput");
  var bloodGroupInput = document.getElementById("bloodGroupInput");
  var heightInput = document.getElementById("heightInput");
  var weightInput = document.getElementById("weightInput");

  var person = {
    name: nameInput.value,
    age: ageInput.value,
    bloodGroup: bloodGroupInput.value,
    height: heightInput.value,
    weight: weightInput.value
  };

  addPersonToTable(person);
  clearForm();
});

function addPersonToTable(person) {
  var row = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  var ageCell = document.createElement("td");
  ageCell.textContent = person.age;
  row.appendChild(ageCell);

  var bloodGroupCell = document.createElement("td");
  bloodGroupCell.textContent = person.bloodGroup;
  row.appendChild(bloodGroupCell);

  var heightCell = document.createElement("td");
  heightCell.textContent = person.height;
  row.appendChild(heightCell);

  var weightCell = document.createElement("td");
  weightCell.textContent = person.weight;
  row.appendChild(weightCell);

  personTableBody.appendChild(row);
}

function clearForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("bloodGroupInput").value = "";
  document.getElementById("heightInput").value = "";
  document.getElementById("weightInput").value = "";
}
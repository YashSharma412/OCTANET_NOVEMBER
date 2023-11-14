// console.log("hi");
const createBtn = document.getElementsByClassName("createBtn");
const addCardBtn = document.getElementsByClassName("taskInitiate__addBtn");
const taskList_container = document.getElementById("todo__container");
const taskCompleted_container = document.getElementById("completed__container");

window.onload = function () {
  displayDate();
}

for (let i = 0; i < createBtn.length; i++) {
  createBtn[i].addEventListener("click", showTextAreaDiv);
  addCardBtn[i].addEventListener("click", generateTaskCard);
}

function displayDate(){
  let date = new Date();
  date = date.toString().split(" ");
  document.getElementById("todays_date").innerHTML = date[2] + " " + date[1] + ", " + date[3];
}

function showTextAreaDiv(event) {
  const taskInitiate_Div = event.target.nextElementSibling;
  // console.log("create clicked", taskInitiate_Div);
  taskInitiate_Div.classList.toggle("disp_none");
  taskInitiate_Div.children[0].focus(); // focus directly to text area so user can input
}

function generateTaskCard(event) {
  event.target.parentNode.classList.toggle("disp_none");
  let flag = false;
  if (event.target.parentNode.parentNode === taskList_container) {
    flag = true;
  }
  const parentContainer = event.target.parentNode.nextElementSibling;
  const cardTextInput = event.target.previousElementSibling;
  let cardText = cardTextInput.value;

  const card_container = document.createElement("div");
  card_container.classList.add("task__card");

  const card_checkbox = document.createElement("input");
  card_checkbox.type = "checkbox";
  card_checkbox.classList.add("task__completed-check");
  card_container.appendChild(card_checkbox);
  card_checkbox.addEventListener("change", taskCompletedCheck);
  if (!flag) {
    card_checkbox.checked = true;
  }
  const task_details = document.createElement("p");
  task_details.classList.add("subheader_text");
  task_details.innerText = cardText;
  card_container.appendChild(task_details);

  const card__btns_container = document.createElement("div");
  card__btns_container.innerHTML = `
    <button onclick="deleteCard(this)" class="btn"><i class="fa-regular fa-trash-can"></i></button>
    <button onclick="editCard(this)" class="btn"><i class="fa-regular fa-pen-to-square"></i></button>
    `;
  card_container.appendChild(card__btns_container);

  parentContainer.insertBefore(card_container, parentContainer.children[0]);
  cardTextInput.value = "";
}

function taskCompletedCheck(event) {
  const currCard = event.target.parentNode;
  if (event.target.checked) {
    taskCompleted_container.lastElementChild.insertBefore(
      currCard,
      taskCompleted_container.lastElementChild.children[0]
    );
    // arr.children[arr.length-1].appendChild(currCard);
  } else {
    taskList_container.lastElementChild.insertBefore(
      currCard,
      taskList_container.lastElementChild.children[0]
    );
  }
}

function deleteCard(btnRef) {
  btnRef.parentNode.parentNode.remove();
}

function editCard(btnRef) {
  console.log(btnRef.parentNode.parentNode);
}

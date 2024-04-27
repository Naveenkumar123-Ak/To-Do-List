const inputBox = document.getElementById("input-id");
const listContainer = document.getElementById("list-container");

function add() {
  if (inputBox.value === "") {
    alert("Please enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  save();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
});

function save() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function saveTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
saveTask();

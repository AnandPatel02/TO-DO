const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    var input = document.getElementById("input");
    var task = input.value;

    if (task !== "") {
        var timestamp = new Date().toLocaleTimeString();
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `
  <input type="checkbox" class="me-2" onclick="completeTask(this)">
  <span>${task}</span>
  <span>${timestamp}</span>
  <button class="delete-button ml-3" onclick="deleteTask(this)"><i class="fa fa-trash"></i></button>
`;
        document.getElementById("taskList").appendChild(listItem);
        input.value = "";
    }
}

function completeTask(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
        taskText.nextElementSibling.innerHTML += " (Completed: " + new Date().toLocaleTimeString() + ")";
    } else {
        taskText.classList.remove("completed");
        taskText.nextElementSibling.innerHTML = taskText.nextElementSibling.innerHTML.replace(/\s+\(Completed:.*\)/, "");
    }
}

function deleteTask(deleteButton) {
    var listItem = deleteButton.parentElement;
    listItem.remove();
}
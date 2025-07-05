document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector(".addItem");
    const taskText = input.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
});

document.querySelector(".searchBar").addEventListener("input", function () {
    const searchText = this.value.trim().toLowerCase();
    // console.log(`searchText:${searchText}`);
    // console.log("Raw input:", this.value);
    // console.log("Trimmed input:", this.value.trim());

    document.querySelectorAll(".todoItem").forEach(item => {
        const currItem = item.querySelector("h4").innerText.trim().toLowerCase();
        // console.log(item.querySelector("currItem").innerText.trim().toLowerCase());
        item.style.display = currItem.includes(searchText) ? "flex" : "none";
    });
})


document.querySelector(".todoList").addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        const taskElement = event.target.parentElement;
        removeTask(taskElement);
    }
});

function addTask(taskText) {
    const todoList = document.querySelector(".todoList");
    const taskId = "task" + (document.querySelectorAll(".todoItem").length + 1);
    const newTask = document.createElement("div");
    newTask.classList.add("todoItem");
    newTask.style.display = "flex";
    newTask.style.justifyContent = "space-between";
    newTask.style.alignItems = "center";
    newTask.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <h4 class='task-text' id="${taskId}" style='font-weight: 500;'>${taskText}</h4>
        </div>
        <button class="deleteBtn" style="width: 20px; height: 20px; font-size: 14px; padding: 0; background-color: rgb(209, 214, 256); color:black">×</button>
        `;
    todoList.appendChild(newTask);
    saveTasks();
}

document.addEventListener("focusin", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.style.border = "3px solid black";
    }
});


function removeTask(taskElement) {
    taskElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".todoItem .task-text").forEach(item => {
        tasks.push(item.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => addTask(taskText));
}


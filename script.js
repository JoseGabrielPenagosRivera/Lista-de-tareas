document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = ""; // Limpiar el cuadro de texto
    }
});

function addTaskToList(task) {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
}

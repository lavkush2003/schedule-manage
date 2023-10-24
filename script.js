// Sample tasks (you can replace this with data from a server or local storage)
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;

    tasks.push({
        name: taskName,
        description: taskDescription,
        dueDate: dueDate
    });

    renderTasks();
    clearForm();
}

// Function to edit a task
function editTask(index) {
    const task = tasks[index];
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;

    // Show the task form
    document.getElementById('task-form').style.display = 'block';

    // Update the save button to act as an update button
    document.getElementById('save-task').innerHTML = 'Update';
    document.getElementById('save-task').onclick = function () {
        updateTask(index);
    };
}

// Function to update a task
function updateTask(index) {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;

    tasks[index] = {
        name: taskName,
        description: taskDescription,
        dueDate: dueDate
    };

    renderTasks();
    clearForm();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to clear the task form
function clearForm() {
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('due-date').value = '';

    // Hide the task form
    document.getElementById('task-form').style.display = 'none';

    // Reset the save button to add mode
    document.getElementById('save-task').innerHTML = 'Save';
    document.getElementById('save-task').onclick = addTask;
}

// Event listener for the "Add Task" button
document.getElementById('add-task').addEventListener('click', function () {
    clearForm();
    document.getElementById('task-form').style.display = 'block';
});

// Initialize the task list
renderTasks();

// For sidebar
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        menuToggle.textContent = '☰';
        menuToggle.style.marginTop = '10px';
    } else {
        menuToggle.textContent = '✖';
        menuToggle.style.marginTop = '20px';
    }
});

// For Time greeting
window.onload = function() {
    sidebar.classList.add('collapsed');
    menuToggle.textContent = '☰';
    menuToggle.style.marginTop = '10px';

    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;

    // Load tasks from local storage when the page loads
    loadTasks();
};

// Get the necessary elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks-list');
const filterCompletedBtn = document.getElementById('filter-completed');
const filterPendingBtn = document.getElementById('filter-pending');
const clearAllBtn = document.getElementById('clear-all');

// Function to load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
        tasksList.innerHTML = storedTasks;
        attachEventListenersToTasks(); // Reattach event listeners to loaded tasks
    }
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('taskList', tasksList.innerHTML);
}

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    const delButton = document.createElement('button');
    delButton.className = 'delete-button';
    delButton.textContent = 'Delete';

    const statusButton = document.createElement('button');
    statusButton.className = 'status-button';
    statusButton.textContent = 'Pending';

    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(statusButton);
    taskContainer.appendChild(delButton);

    const hr = document.createElement('hr');

    tasksList.prepend(hr);
    tasksList.prepend(taskContainer);

    delButton.addEventListener('click', () => {
        taskContainer.remove();
        hr.remove();
        saveTasks(); // Save tasks to local storage
    });

    statusButton.addEventListener('click', () => {
        if (statusButton.textContent === 'Pending') {
            statusButton.textContent = 'Completed';
            statusButton.style.backgroundColor = 'lightgreen';
        } else {
            statusButton.textContent = 'Pending';
            statusButton.style.backgroundColor = '#f7f31e';
        }
        alert(`Task status : ${statusButton.textContent}`);
        saveTasks(); // Save tasks to local storage
    });

    newTaskInput.value = "";
    saveTasks(); // Save tasks to local storage
}

// Function to filter tasks based on status
function filterTasks(status) {
    const tasks = tasksList.querySelectorAll('.task-container');
    tasks.forEach(task => {
        const statusButton = task.querySelector('.status-button');
        if (statusButton.textContent === status || status === 'All') {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
}

// Function to clear all tasks
function clearAllTasks() {
    tasksList.innerHTML = '';
    saveTasks(); // Save the empty task list to local storage
}

// Add event listeners
addTaskBtn.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

filterCompletedBtn.addEventListener('click', () => filterTasks('Completed'));
filterPendingBtn.addEventListener('click', () => filterTasks('Pending'));
clearAllBtn.addEventListener('click', clearAllTasks);

// Function to reattach event listeners to tasks after loading fro

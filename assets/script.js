// For aside bar-
const sidebar = document.getElementById('sidebar'); //selects sidebar
const menuToggle = document.getElementById('menuToggle'); //selects menu button

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');  //classlist.toggle- it is a predefined property which which is applied on collapsed (what did toggle do it adds a class if it is not present and removes a class if it is present).
    if (sidebar.classList.contains('collapsed')) {
        menuToggle.textContent = '☰';
        menuToggle.style.marginTop = '10px';
    } else {
        menuToggle.textContent = '✖';
        menuToggle.style.marginTop = '20px';
    }
});

// For Time greeting-
window.onload = function() {
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
};


// For Creating New Task
// Get the necessary elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks-list');

// Add event listener to the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    // Create an hr element
    const hr = document.createElement('hr');

    // Prepend the new task and hr to the tasks list (so it appears at the top)
    tasksList.prepend(hr);
    tasksList.prepend(taskItem);

    // Clear the input field
    newTaskInput.value = "";
}

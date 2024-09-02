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
};


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

    // Create a new task item container
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';

    // Create a new task item div
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    // Create the delete button
    const delButton = document.createElement('button');
    delButton.className = 'delete-button';
    delButton.textContent = 'Delete';

    // Create the status button
    const statusButton = document.createElement('button');
    statusButton.className = 'status-button';
    statusButton.textContent = 'Pending';

    // Append the task item and buttons to the task container
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(statusButton);
    taskContainer.appendChild(delButton);

    // Create an hr element
    const hr = document.createElement('hr');

    // Append the task container and hr to the task list
    tasksList.prepend(hr);
    tasksList.prepend(taskContainer);

    // Add event listener for delete button
    delButton.addEventListener('click', () => {
        taskContainer.remove();
        hr.remove();
    });

    // Add event listener for status button
    statusButton.addEventListener('click', () => {
        if (statusButton.textContent === 'Pending') {
            statusButton.textContent = 'Completed';
            statusButton.style.backgroundColor = 'lightgreen';
        } else {
            statusButton.textContent = 'Pending';
            statusButton.style.backgroundColor = '#f7f31e';
        }
        alert(`Task status : ${statusButton.textContent}`);
    });

    // Clear the input field
    newTaskInput.value = "";
}

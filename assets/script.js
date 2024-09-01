// For aside bar-
const sidebar = document.getElementById('sidebar'); //selects sidebar
const menuToggle = document.getElementById('menuToggle'); //selects menu button

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');  //classlist.toggle- it is a predefined property which which is applied on collapsed (what doed toggle do it adds a class if it is not present and removes a class if it is present).
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

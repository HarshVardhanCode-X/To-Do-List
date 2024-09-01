const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        menuToggle.textContent = '☰'; // Show menu icon when collapsed
        menuToggle.style.marginTop = '10px'; // Adjust the margin to be close to the "Menu" heading
    } else {
        menuToggle.textContent = '✖'; // Show cross icon when expanded
        menuToggle.style.marginTop = '20px'; // Reset margin
    }
});

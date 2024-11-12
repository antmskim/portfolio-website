const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function showProjectDetails(projectId) {
    // Hide all other project details
    const allDetails = document.querySelectorAll('.project-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    // Show the selected project details
    document.getElementById(projectId).style.display = 'block';
    document.getElementById(projectId).scrollIntoView({ behavior: 'smooth' });
}

function hideProjectDetails(projectId) {
    // Hide the project details
    document.getElementById(projectId).style.display = 'none';
}

function toggleProjectDetails(projectId) {
    const detailElement = document.getElementById(projectId);
    const isDisplayed = detailElement.style.display === 'block';

    // Toggle display state
    detailElement.style.display = isDisplayed ? 'none' : 'block';
}

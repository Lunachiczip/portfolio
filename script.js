const input = document.querySelector('input[type="checkbox"]')
const sidebar = document.querySelector('.nav-menu')

input.addEventListener('change', function() {
    if (input.checked) {
        sidebar.classList.add('active')
    } else {
        sidebar.classList.remove('active')
    }
})

function navScroll () {
    const navbar = document.querySelector('.navbar-container')

    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
            navbar.classList.add('active')
        } else {
            navbar.classList.remove('active')
        }
    })
}
navScroll()

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.bar-progress');

    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
});
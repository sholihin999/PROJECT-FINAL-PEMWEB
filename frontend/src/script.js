    // const loginButton = document.getElementById('loginButton');
    // const loginModal = document.getElementById('loginModal');
    // const closeModal = document.getElementById('closeModal');

    // loginButton.addEventListener('click', () => {
    //     loginModal.classList.remove('hidden');
    // });

    // closeModal.addEventListener('click', () => {
    //     loginModal.classList.add('hidden');
    // });

    // window.addEventListener('click', (event) => {
    //     if (event.target === loginModal) {
    //         loginModal.classList.add('hidden');
    //     }
    // });

    // document.getElementById('registerLink').addEventListener('click', function() {
    //     document.getElementById('loginModal').classList.add('hidden');
    //     document.getElementById('registerModal').classList.remove('hidden');
    // });

    // document.getElementById('closeRegisterModal').addEventListener('click', function() {
    //     document.getElementById('registerModal').classList.add('hidden');
    // });

    // document.getElementById('registerForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     window.location.href = 'index.html';
    // });

    // document.getElementById('loginForm').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     window.location.href = 'index.html';
    // });

document.addEventListener('DOMContentLoaded', function() {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
});

window.addEventListener('load', function() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'none';
});
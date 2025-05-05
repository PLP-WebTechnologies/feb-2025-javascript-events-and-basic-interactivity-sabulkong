// script.js
// Event Handling
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ff6b6b';
    this.textContent = "Hovering! 🚀";
});

document.getElementById('hoverDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#eee';
    this.textContent = "Hover over me! ✈️";
});

document.addEventListener('keypress', (e) => {
    document.getElementById('keyDisplay').textContent = e.key;
});

document.getElementById('secretArea').addEventListener('dblclick', function() {
    document.getElementById('secretMessage').classList.remove('hidden');
});

// Image Gallery
const images = [
    'https://picsum.photos/300/200?1',
    'https://picsum.photos/300/200?2',
    'https://picsum.photos/300/200?3'
];
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentIndex];
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('myForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Name validation
    if (name.trim() === '') {
        showError('nameError', 'Name is required');
    } else {
        clearError('nameError');
    }

    // Email validation
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email');
    } else {
        clearError('emailError');
    }

    // Password validation
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
    } else {
        clearError('passwordError');
    }
}

// Real-time validation
document.getElementById('email').addEventListener('input', function() {
    if (!emailRegex.test(this.value)) {
        showError('emailError', 'Please enter a valid email');
    } else {
        clearError('emailError');
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
    } else {
        clearError('passwordError');
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = '';
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.classList.add('active-state');
    });
    
    button.addEventListener('mouseup', function() {
        this.classList.remove('active-state');
    });
    
    button.addEventListener('mouseleave', function() {
        this.classList.remove('active-state');
    });
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelectorAll('.gallery-controls button').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.add('active-state');
        setTimeout(() => this.classList.remove('active-state'), 200);
    });
});
// ===== PAGE MANAGEMENT =====
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ===== ROLE-BASED LOGIN =====
function showLoginForm(role) {
    if (role === 'student') {
        showPage('studentLoginPage');
        startLoginCarousel('studentLoginPage');
    } else if (role === 'proctor') {
        showPage('proctorLoginPage');
        startLoginCarousel('proctorLoginPage');
    } else if (role === 'admin') {
        showPage('adminLoginPage');
        startLoginCarousel('adminLoginPage');
    }
}

function backToRoleSelection() {
    showPage('mainLoginPage');
}

// ===== LOGIN HANDLER =====
function handleLogin(event, role) {
    event.preventDefault();
    
    let emailId, passwordId, formId;
    
    if (role === 'student') {
        emailId = 'studentEmail';
        passwordId = 'studentPassword';
        formId = 'studentLoginForm';
    } else if (role === 'proctor') {
        emailId = 'proctorEmail';
        passwordId = 'proctorPassword';
        formId = 'proctorLoginForm';
    } else if (role === 'admin') {
        emailId = 'adminEmail';
        passwordId = 'adminPassword';
        formId = 'adminLoginForm';
    }
    
    const email = document.getElementById(emailId).value;
    const password = document.getElementById(passwordId).value;
    
    if (email && password) {
        // Store user info
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userLoggedIn', 'true');
        
        // Extract name from email
        const nameFromEmail = email.split('.')[0];
        const userName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
        localStorage.setItem('userName', userName);
        
        // Navigate based on role
        if (role === 'student') {
            alert('Login successful! Welcome Student.');
            showPage('homePage');
            updateStudentInfo();
        } else if (role === 'proctor') {
            alert('Login successful! Welcome Proctor.');
            showPage('proctorPage');
            updateProctorInfo();
        } else if (role === 'admin') {
            alert('Login successful! Welcome Administrator.');
            showPage('adminPage');
            updateAdminInfo();
        }
        
        // Reset form
        document.getElementById(formId).reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// ===== LOGOUT FUNCTIONALITY =====
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        
        // Clear forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => form.reset());
        
        // Show role selection page
        showPage('mainLoginPage');
        window.scrollTo(0, 0);
    }
}

// ===== UPDATE STUDENT INFO =====
function updateStudentInfo() {
    const studentName = localStorage.getItem('userName') || 'John Doe';
    const userEmail = localStorage.getItem('userEmail') || 'john.doe@skit.edu.in';
    
    // Update profile page
    const studentNameEl = document.getElementById('studentName');
    const studentEmailEl = document.getElementById('studentEmail');
    
    if (studentNameEl) studentNameEl.textContent = studentName;
    if (studentEmailEl) studentEmailEl.textContent = userEmail;
    
    // Update avatar initials
    const avatars = document.querySelectorAll('.profile-avatar');
    avatars.forEach(avatar => {
        const initials = studentName.split(' ').map(n => n[0]).join('').toUpperCase();
        avatar.textContent = initials;
    });
}

// ===== UPDATE PROCTOR INFO =====
function updateProctorInfo() {
    const proctorName = localStorage.getItem('userName') || 'Dr. Smith';
    updateDate('proctorCurrentDate');
}

// ===== UPDATE ADMIN INFO =====
function updateAdminInfo() {
    const adminName = localStorage.getItem('userName') || 'Admin User';
    updateDate('adminCurrentDate');
}

// ===== UPDATE DATE =====
function updateDate(elementId) {
    const dateEl = document.getElementById(elementId);
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options);
        dateEl.textContent = `Today: ${today}`;
    }
}

function updateCurrentDate() {
    updateDate('currentDate');
    updateDate('proctorCurrentDate');
    updateDate('adminCurrentDate');
}

// ===== SIGNUP FUNCTIONALITY =====
function showSignup() {
    alert('Sign-up functionality can be expanded. For now, please use:\nEmail: test@example.com\nPassword: any password');
}

// ===== FORGOT PASSWORD =====
function forgotPassword() {
    const email = prompt('Enter your email address:');
    if (email) {
        alert(`Password reset link has been sent to ${email}`);
    }
}

// ===== EDIT PROFILE =====
function editProfile() {
    const newName = prompt('Enter your name:', localStorage.getItem('userName'));
    if (newName) {
        localStorage.setItem('userName', newName);
        updateStudentInfo();
        alert('Profile updated successfully!');
    }
}

// ===== CONTACT FORM SUBMISSION =====
function setupContactForm() {
    const contactForm = document.getElementById('contactFormElement');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// ===== CHECK LOGIN STATUS ON PAGE LOAD =====
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const userRole = localStorage.getItem('userRole');
    
    if (isLoggedIn === 'true') {
        // User is logged in
        if (userRole === 'student') {
            showPage('homePage');
            updateStudentInfo();
        } else if (userRole === 'proctor') {
            showPage('proctorPage');
            updateProctorInfo();
        } else if (userRole === 'admin') {
            showPage('adminPage');
            updateAdminInfo();
        }
    } else {
        // User is not logged in, show role selection
        showPage('mainLoginPage');
    }
}

// ===== INITIALIZE APPLICATION =====
function initializeApp() {
    setupContactForm();
    updateCurrentDate();
    checkLoginStatus();
}

// ===== DEMO CREDENTIALS =====
function showDemoCredentials() {
    console.log('Demo Credentials:');
    console.log('Student - Email: student@example.com, Password: any');
    console.log('Proctor - Email: proctor@example.com, Password: any');
    console.log('Admin - Email: admin@example.com, Password: any');
}

// ===== RUN ON DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    showDemoCredentials();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'l') {
            logout();
        }
    });
});

// ===== UTILITY FUNCTIONS =====

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getStudentStats() {
    return {
        activeCourses: 5,
        upcomingExams: 3,
        gpa: 3.8,
        attendance: 92
    };
}

function getProctorStats() {
    return {
        totalStudents: 45,
        examsToday: 3,
        examsCompleted: 120,
        alerts: 2
    };
}

function getAdminStats() {
    return {
        totalFeeReceived: 95,
        totalStudents: 400,
        pendingFees: 15,
        totalProctors: 25
    };
}

function generateReport(reportType) {
    const date = new Date().toLocaleDateString();
    alert(`Generating ${reportType} report\nDate: ${date}\n\nReport will be downloaded shortly.`);
}

// ===== LOGIN CAROUSEL FUNCTIONS =====
let loginCarouselIntervals = {};

function startLoginCarousel(pageId) {
    // Clear any existing interval for this page
    if (loginCarouselIntervals[pageId]) {
        clearInterval(loginCarouselIntervals[pageId]);
    }
    
    const page = document.getElementById(pageId);
    if (!page) return;
    
    const slides = page.querySelectorAll('.login-slide');
    if (slides.length === 0) return;
    
    // Set first slide as active
    slides.forEach(slide => slide.classList.remove('active'));
    slides[0].classList.add('active');
    
    let currentIndex = 0;
    
    // Auto-rotate slides every 4 seconds
    loginCarouselIntervals[pageId] = setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 4000);
}

// Setup page load animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.info-box, .exam-card, .assignment-item, .monitoring-item, .transaction-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `slideInUp 0.5s ease ${index * 0.1}s forwards`;
    });
    
    // Initialize gallery
    initGallery();
});

// ===== PHOTO GALLERY FUNCTIONS =====
let currentSlideIndex = 1;
let autoSlideInterval;

function initGallery() {
    showSlide(currentSlideIndex);
    startAutoSlide();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
}

function changeSlide(n) {
    clearInterval(autoSlideInterval);
    showSlide(currentSlideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlide(currentSlideIndex = n);
    startAutoSlide();
}

function showSlide(n) {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000); // Change slide every 5 seconds
}
// ===== TRANSACTION MODAL FUNCTIONS =====
function openTransactionModal() {
    const modal = document.getElementById('transactionModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeTransactionModal() {
    const modal = document.getElementById('transactionModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('transactionModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}
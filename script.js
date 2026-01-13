// --- 1. Background Slider ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);


// --- 2. Modal Logic (Form & WhatsApp) ---
const modal = document.getElementById('eventModal');

// Global variable to store the currently selected event data
let currentEvent = {}; 

function openEventDetails(title, broad, host, date, time, fee, prize, phone) {
    // 1. Save data to global variable so we can use it later
    currentEvent = {
        title: title,
        host: host,
        date: date,
        fee: fee,
        prize: prize,
        phone: phone
    };

    // 2. Display text in Modal
    document.getElementById('m-title').innerText = title;
    document.getElementById('m-broad').innerText = broad;
    document.getElementById('m-host').innerText = host;
    document.getElementById('m-date').innerText = date;
    document.getElementById('m-time').innerText = time;
    document.getElementById('m-fee').innerText = fee;
    document.getElementById('m-prize').innerText = prize;

    // 3. Clear previous inputs (so it's empty for new user)
    document.getElementById('user-name').value = '';
    document.getElementById('user-handle').value = '';

    // 4. Show Modal
    modal.style.display = 'block';
}

// Function triggered when "Register via WhatsApp" button is clicked
function sendToWhatsapp() {
    // Get values from input fields
    let userName = document.getElementById('user-name').value.trim();
    let userHandle = document.getElementById('user-handle').value.trim();

    // Validation: Check if fields are empty
    if(userName === "" || userHandle === "") {
        alert("Please enter your Name and ShareChat Handle to register.");
        return; // Stop function here
    }

    // Create the OFFICIAL Message using Form Data + Event Data
    let message = `*REGISTRATION REQUEST*

*Ref: Event Participation*
Event: ${currentEvent.title}
Host: ${currentEvent.host}
Date: ${currentEvent.date}
Entry Fee: ${currentEvent.fee}
Prize: ${currentEvent.prize}

*Candidate Details:*
Name: ${userName}
ShareChat Handle: ${userHandle}

Please confirm my registration.`;

    // Open WhatsApp
    let waLink = `https://wa.me/${currentEvent.phone}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// --- 3. Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


// --- 4. Dark/Light Theme Toggle ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

if(localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if(body.classList.contains('light-theme')){
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
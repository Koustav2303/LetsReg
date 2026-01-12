// --- 1. Background Slider ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);

// --- 2. Modal Logic (Events) ---
const modal = document.getElementById('eventModal');

function openEventDetails(title, broad, host, date, time, fee, phone) {
    document.getElementById('m-title').innerText = title;
    document.getElementById('m-broad').innerText = broad;
    document.getElementById('m-host').innerText = host;
    document.getElementById('m-date').innerText = date;
    document.getElementById('m-time').innerText = time;
    document.getElementById('m-fee').innerText = fee;

    // Create WhatsApp Link with pre-filled message
    let message = `Hi, I'm interested in *${title}* hosted by *${host}* (Date: ${date}). Please provide details.`;
    let waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    document.getElementById('m-whatsapp').href = waLink;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
// Close if clicked outside
window.onclick = function(e) {
    if (e.target == modal) modal.style.display = "none";
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

// Check LocalStorage for saved theme preference
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
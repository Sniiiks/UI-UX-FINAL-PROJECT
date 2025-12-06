lucide.createIcons();

// 2. Slider Logic
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.getElementById('indicators');
let currentSlide = 0;

// Created indicators
if (indicatorsContainer) {
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        
        dot.className = `h-1 rounded-full transition-all ${idx === 0 ? 'w-12 bg-tomato' : 'w-8 bg-almond/30'}`;
        dot.onclick = () => goToSlide(idx);
        indicatorsContainer.appendChild(dot);
    });
}

const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll('button') : [];

function updateSlider() {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
       
        if(dots[idx]) dots[idx].className = 'h-1 rounded-full transition-all w-8 bg-almond/30';
    });

    if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active');
        
        if(dots[currentSlide]) dots[currentSlide].className = 'h-1 rounded-full transition-all w-12 bg-tomato';
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(idx) {
    currentSlide = idx;
    updateSlider();
}

let slideInterval = setInterval(nextSlide, 5000);

const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// 3. Product Scroll Logic
const scrollContainer = document.getElementById('productContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (scrollLeftBtn && scrollContainer) {
    scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });
}

if (scrollRightBtn && scrollContainer) {
    scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });
}

// 4. Toast Logic
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    
    toast.className = 'toast glass flex items-center gap-3 px-6 py-4 rounded-lg border border-lava/30 text-ghost min-w-[300px] shadow-2xl';
    toast.innerHTML = `
        <div class="bg-tomato rounded-full p-1"><i data-lucide="check" class="w-4 h-4 text-night"></i></div>
        <span class="font-bold text-sm tracking-wide">${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.classList.add('hiding');
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.id === 'nextSlide' || btn.id === 'prevSlide' || btn.closest('#indicators') || btn.id === 'scrollLeft' || btn.id === 'scrollRight' || btn.id === 'searchToggle' || btn.id === 'menuBtn' || btn.id === 'closeMenu') return;
        showToast("ADDED TO CART");
    });
});

// 5. Mobile Menu Logic
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
}

if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
}

// 6. Search Toggle
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) {
            searchInput.focus();
        }
    });

}

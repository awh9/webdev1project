// JavaScript for the carousel functionality
const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// This finds all child elements in the carousel
const carouselItems = Array.from(carouselSlide.children);

let counter = 0;

// Next button listener
nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= carouselItems.length) {
        counter = 0; // Loop back to the first image
    }
    // Scrolls the item into view, which works with scroll-snap
    carouselItems[counter].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Previous button listener
prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselItems.length - 1; // Loop back to the last image
    }
    // Scrolls the item into view, which works with scroll-snap
    carouselItems[counter].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Auto-play functionality
setInterval(() => {
    nextBtn.click();
}, 8000); // Change image every 8 seconds
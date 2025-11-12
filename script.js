let currentIndex = 0;
const items = document.querySelectorAll('.love-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Show current card
function showCard(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        item.querySelector('.love-text').classList.remove('active');
        if(i === index) item.classList.add('active');
    });
}

// Initialize
showCard(currentIndex);

// Arrow navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showCard(currentIndex);
});

// Click to unfold text
items.forEach(item => {
    const text = item.querySelector('.love-text');
    const img = item.querySelector('.love-img');
    img.addEventListener('click', () => {
        text.classList.toggle('active');
    });
});

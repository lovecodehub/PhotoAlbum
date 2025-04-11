let totalImages = 31; 
let currentIndex = 0;
let images = [];
let container = document.querySelector('.album-container');
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

for (let i = 1; i <= totalImages; i++) {
    let div = document.createElement('div');
    div.className = 'photo-container';
    let img = document.createElement('img');
    img.className = 'photo';
    img.src = `pic (${i}).jpeg`;
    img.alt = `Photo ${i}`;
    img.onclick = () => openLightbox(i - 1);
    div.appendChild(img);
    container.appendChild(div);
    images.push(img.src);
}

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex];
}

// Close lightbox when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
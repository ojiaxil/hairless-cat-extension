const hairlessCatImages = [
    "images/hairless_cat_1.png",
    "images/hairless_cat_2.jpeg",
    "images/hairless_cat_3.jpg",
    "images/hairless_cat_4.jpg",
    "images/hairless_cat_5.jpg"
];

function getRandomHairlessCats() {
    return hairlessCatImages[Math.floor(Math.random() * hairlessCatImages.length)];
}

function replaceImages() {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.src = getRandomHairlessCats();
        img.srcset = "";
    });
}

replaceImages();

const observer = new MutationObserver(replaceImages);
observer.observe(document.body, { childList: true, subtree: true });
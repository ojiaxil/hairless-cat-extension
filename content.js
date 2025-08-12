// list of hairless cat images
const hairlessCatImages = [
    
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
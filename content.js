const hairlessCatImages = [
    "images/hairless_cat_1.png",
    "images/hairless_cat_2.jpeg",
    "images/hairless_cat_3.jpg",
    "images/hairless_cat_4.jpg",
    "images/hairless_cat_5.jpg"
];

const hairlessCatURLs = hairlessCatImages.map(p => chrome.runtime.getURL(p));

function getRandomHairlessCats() {
    return hairlessCatURLs[Math.floor(Math.random() * hairlessCatURLs.length)];
}

function replaceOne(img) {
    if (!img || img.dataset.hairlessCatReplaced == "1") return;
    img.src = getRandomHairlessCats();
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.dataset.hairlessCatReplaced = "1";
}

function replaceAll() {
    document.querySelectorAll("img").forEach(replaceOne);
}

replaceAll();

const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
        if (m.type == "childList") {
            m.addedNodes.forEach(node => {
                if (node.tagName == "IMG") replaceOne(node);
                else if (node.querySelectorAll) node.querySelectorAll("img").forEach(replaceOne);
            });
        } else if (m.type == "attributes" && m.target.tagName == "IMG") {
            replaceOne(m.target);
        }
    }
});
observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src", "srcset"]
});
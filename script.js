const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];

let index = 0;
const hero = document.querySelector(".hero");

// საწყისი ფოტო
hero.style.backgroundImage = `url('${images[index]}')`;

// ავტომატური ცვლა 5 წამში
setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
}, 5000);

document.querySelectorAll(".skill").forEach((skill) => {
    const bar = skill.querySelector(".progress-bar-fill");
    const targetWidth = bar.getAttribute("data-width");

    skill.addEventListener("mouseenter", () => {
        bar.style.width = targetWidth;
    });

    skill.addEventListener("mouseleave", () => {
        bar.style.width = "0%";
    });
});

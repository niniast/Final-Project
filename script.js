const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];

let index = 0;
const hero = document.querySelector(".hero");

// საწყისი ფოტო
hero.style.background = `url('${images[0]}')`;
hero.style.background = `url('${images[0]}')`;
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.backgroundRepeat = "no-repeat";

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

document.querySelectorAll(".service-card").forEach((card) => {
    const icon = card.querySelector("img");
    const title = card.querySelector("h4");
    const paragraph = card.querySelector("p");

    card.addEventListener("mouseenter", () => {
        icon.style.display = "none";
        title.style.display = "block";
        paragraph.style.display = "block";
        card.style.background = "#15263E";
        card.style.color = "#fff";
    });

    card.addEventListener("mouseleave", () => {
        icon.style.display = "block";
        title.style.display = "none";
        paragraph.style.display = "none";
        card.style.background = "#f0f0f0";
        card.style.color = "black";
    });
});
document.querySelectorAll(".client").forEach((client) => {
    const text = client.querySelector(".client-text");

    client.addEventListener("mouseenter", () => {
        text.style.display = "block";
        text.style.transform = "scale(1) rotate(0deg)";
        text.style.pointerEvents = "auto";
    });

    client.addEventListener("mouseleave", () => {
        text.style.display = "none";
        text.style.transform = "scale(0.3) rotate(-30deg)";
        text.style.pointerEvents = "none";
    });
});

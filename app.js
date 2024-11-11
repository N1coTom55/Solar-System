function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 1.5 + 0.1;
        const opacity = Math.random() * 0.5 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.opacity = opacity;

        container.appendChild(star);
    }
}

createStars();

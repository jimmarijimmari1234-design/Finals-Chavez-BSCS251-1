// smoothTransition.js

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("header");
    const navbarHeight = navbar.offsetHeight;

    // Create overlay for content below navbar
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = `${navbarHeight}px`;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = `calc(100% - ${navbarHeight}px)`;
    overlay.style.backgroundColor = "#ffffff";
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden"; // hide initially to prevent flicker
    overlay.style.transition = "opacity 0.4s ease-in-out";
    overlay.style.zIndex = 9998;
    document.body.appendChild(overlay);

    // Fade-in on page load
    requestAnimationFrame(() => { // ensure browser rendered first
        overlay.style.visibility = "visible";
        overlay.style.opacity = 1; // start white
        setTimeout(() => {
            overlay.style.opacity = 0; // fade to transparent
        }, 50);
    });

    // Smooth fade-out for all links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

            e.preventDefault();
            overlay.style.opacity = 1; // fade to white below navbar
            overlay.style.visibility = "visible";
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
});

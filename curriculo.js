function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("rotated");
    } else {
        content.style.display = "block";
        icon.classList.add("rotated");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section-content").forEach(section => {
        section.style.display = "none";
    });
});
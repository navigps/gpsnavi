document.addEventListener("DOMContentLoaded", function() {
    const scrollToGalleryButton = document.getElementById("scroll-to-gallery");

    if (scrollToGalleryButton) {
        scrollToGalleryButton.addEventListener("click", function(event) {
            event.preventDefault();

            const gallerySection = document.getElementById("photo-album");
            const offsetTop = gallerySection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }
});



// Dalga efekti oluşturma
var links = document.querySelectorAll('.card-link'); // Tüm card-link elementlerini seç

links.forEach(function(link) {
    var waveWidth = 10,
        waveCount = Math.floor(link.offsetWidth / waveWidth),
        docFrag = document.createDocumentFragment();

    for (var i = 0; i < waveCount; i++) {
        var wave = document.createElement("div");
        wave.className = "wave";
        docFrag.appendChild(wave);
        wave.style.left = i * waveWidth + "px";
        wave.style.animationDelay = (i / 100) + "s";
    }

    link.appendChild(docFrag);
});











document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".navbar1").classList.toggle("active");
});
 let marquee = document.getElementById("scrolling");

    marquee.addEventListener("mouseover", function() {
        marquee.stop(); // Stop marquee on hover
    });

    marquee.addEventListener("mouseout", function() {
        marquee.start(); // Start marquee when mouse leaves
    });

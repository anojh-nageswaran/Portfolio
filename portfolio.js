document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");
   
    function affichagedelafrise() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75) {
                item.classList.add("active");
            }else{
                item.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", affichagedelafrise);
    affichagedelafrise();
});

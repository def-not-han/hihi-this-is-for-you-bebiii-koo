document.addEventListener("DOMContentLoaded", function() {
    let envelope = document.getElementById("envelope");
    let flap = document.getElementById("flap");
    let letter = document.getElementById("letter");
    let isOpened = false;
    
    envelope.addEventListener("click", function() {
        if (!isOpened) {
            flap.style.transform = "rotateX(180deg)";
            setTimeout(() => {
                envelope.style.transform = "translateY(-150px) scale(0.9)";
                letter.classList.remove("hidden");
                setTimeout(() => {
                    letter.style.opacity = "1";
                    letter.style.transform = "translateY(0)";
                }, 300);
            }, 500);
            isOpened = true;
        }
    });
});
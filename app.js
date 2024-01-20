// FUNCTION 1

// * When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-container").style.top = "0";
    } else {
        document.getElementById("header-container").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// FUNCTION 2 : GSAP

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 20%',
            scrub: true,
        },
    });
});



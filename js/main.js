const logoAnimate = document.querySelector('.logo_animate');
const letters = Array.from(logoAnimate.children);

anime({
    targets: letters,
    translateX: 50,
    translateY: -15,
    direction: 'alternative',
    // loop: true,
    duration: 6000,
    delay: function(el, i, l) {
        return i * 200;
    },
    endDelay: function(el, i, l) {
    return (l - i) * 200;
    }
});

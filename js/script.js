// https://stackoverflow.com/questions/12712592/how-to-make-a-small-image-move-from-one-side-of-the-screen-to-the-other-with-js

$(function () {
    var img = $("#airplane-image"),
        container = $(".airplane"),
        containerWidth = container.width(),
        duration = 5000;

    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
        // If reduced motion is preferred, stop the animation
        img.css({
            left: 0, // Keep the airplane static
            transform: "translateY(-50%)" // Center it vertically
        });
    } else {
        // Otherwise, run the animation
        function animatePlane() {
            img.css("left", -img.width()).animate(
                {
                    left: containerWidth
                },
                duration,
                function () {
                    animatePlane();
                }
            );
        }

        animatePlane();
    }
});
// https://stackoverflow.com/questions/58931615/disable-animation-with-prefers-reduced-motion
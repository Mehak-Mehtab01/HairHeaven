document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const duration = 10000; // Total duration of the animation in milliseconds

    counters.forEach(counter => {
        const animateCount = (start, end, element, duration) => {
            let startTime = null;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                element.innerText = Math.floor(progress * (end - start) + start);

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    // When the count finishes, restart the animation
                    setTimeout(() => {
                        element.innerText = start;
                        requestAnimationFrame(step);
                    }, 1000); // Optional delay before restarting
                }
            };

            requestAnimationFrame(step);
        };

        const target = +counter.getAttribute('data-target');
        animateCount(0, target, counter, duration);
    });
});

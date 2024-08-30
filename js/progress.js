document.addEventListener('DOMContentLoaded', function() {
    function createScrollProgressBar(selector, minWidth = 733) {
        const progressFilled = document.querySelector(selector);

        function calculateScrollPercent() {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            return (scrollTop / windowHeight) * 100;
        }

        function updateProgressBar() {
            if (window.innerWidth > minWidth) {
                const scrollPercent = calculateScrollPercent();
                progressFilled.style.width = scrollPercent + '%';
            } else {
                progressFilled.style.width = '0%';
            }
        }

        // Обработчики событий
        window.addEventListener('scroll', updateProgressBar);
        window.addEventListener('resize', updateProgressBar);
        updateProgressBar();
    }

    createScrollProgressBar('.progress-filled');
});
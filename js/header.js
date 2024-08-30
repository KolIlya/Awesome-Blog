document.addEventListener('DOMContentLoaded', function() {
    function setHeaderPosition(header, heroContent, minWidth = 745, fixedTop = '1.5rem') {
        const checkHeaderPosition = () => {
            if (window.innerWidth < minWidth) {
                return;
            }
            const heroContentRect = heroContent.getBoundingClientRect();
            const headerHeight = header.offsetHeight;

            if (heroContentRect.bottom <= headerHeight) {
                header.style.position = 'absolute';
                header.style.top = heroContentRect.bottom + 'px';
            } else {
                header.style.position = 'fixed';
                header.style.top = fixedTop;
            }
        };

        window.addEventListener('scroll', checkHeaderPosition);
        checkHeaderPosition();
    }

    const header = document.getElementById('header');
    const heroContent = document.querySelector('.hero-content');
    setHeaderPosition(header, heroContent);
});
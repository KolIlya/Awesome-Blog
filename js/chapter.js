document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(links, behavior = 'smooth') {
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: behavior });
            });
        });
    }

    function highlightActiveLink(links, activeClass = 'active') {
        window.addEventListener('scroll', () => {
            let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            links.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    link.classList.add(activeClass);
                } else {
                    link.classList.remove(activeClass);
                }
            });
        });
    }

    const links = document.querySelectorAll('.header-content__link');
    smoothScroll(links);
    highlightActiveLink(links);
});
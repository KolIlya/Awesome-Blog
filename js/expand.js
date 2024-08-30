class Header {
    constructor() {
        this.header = document.getElementById('header');
        this.toggleButton = document.getElementById('toggleButton');
        this.heroSection = document.querySelector('.hero__section');
        this.headerTitle = document.querySelector('.awesome-blog__title');
        this.mainTitle = document.querySelector('.hero-title__section');
        this.headerContent = document.querySelector('.header-content');
        this.navigationLinks = document.querySelectorAll('.header-navigation__link');
        this.navigationIcons = document.querySelectorAll('.header-navigation__icon');

        this.bindEvents();
        this.checkHeaderState();
    }

    bindEvents() {
        if (this.toggleButton && this.header) {
            this.toggleButton.addEventListener('click', () => this.toggleHeader());
        }
    }

    toggleHeader() {
        this.header.classList.toggle('expanded');
        this.toggleButton.classList.toggle('expanded');
        
        if (this.header.classList.contains('expanded')) {
            this.expandHeader();
        } else {
            this.collapseHeader();
        }
        this.checkHeaderState();
    }

    expandHeader() {
        if (window.innerWidth >= 745) {
            this.heroSection.style.marginLeft = '22rem';
        }
        this.mainTitle.classList.add('title-moved');
        setTimeout(() => {
            this.headerTitle.classList.add('awesome-blog__title-visible');
            this.headerContent.classList.add('visible');
        }, 200);
    }

    collapseHeader() {
        this.heroSection.style.marginLeft = '0rem';
        this.mainTitle.classList.remove('title-moved');
        this.headerTitle.classList.remove('awesome-blog__title-visible');
        this.headerContent.classList.remove('visible');
    }

    checkHeaderState() {
        if (this.header.classList.contains('expanded')) {
            this.showNavigationLinks();
        } else {
            this.hideNavigationLinks();
        }
    }

    showNavigationLinks() {
        this.navigationLinks.forEach(link => link.style.display = 'inline-block');
        this.navigationIcons.forEach(icon => icon.style.display = 'none');
    }

    hideNavigationLinks() {
        if (window.innerWidth < 745) {
            this.navigationLinks.forEach(link => link.style.display = 'none');
            this.navigationIcons.forEach(icon => icon.style.display = 'none');
        } else {
            this.navigationLinks.forEach(link => link.style.display = 'none');
            this.navigationIcons.forEach(icon => icon.style.display = 'inline-block');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Header();
});
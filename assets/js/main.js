document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tabs__link');
    const contents = document.querySelectorAll('.modal__content');

    tabLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            // Deactivate all tabs
            tabLinks.forEach(l => {
                l.classList.remove('active');
                l.setAttribute('aria-selected', 'false');
            });

            // Activate current tab
            link.classList.add('active');
            link.setAttribute('aria-selected', 'true');

            const target = link.dataset.tab;

            // Hide all contents
            contents.forEach(c => {
                if (c.dataset.content === target) {
                    c.hidden = false;
                } else {
                    c.hidden = true;
                }
            });
        });
    });
});
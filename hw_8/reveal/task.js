const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function () {
    const viewportHeight = window.innerHeight;

    for (let element of reveal) {        
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < viewportHeight && elementTop > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
});
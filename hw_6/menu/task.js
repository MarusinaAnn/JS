let links = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < links.length; i++) {
    if (links[i].closest('li').querySelector('ul')) {
        let element = links[i].closest('li').querySelector('a');
        console.log(element);
        element.addEventListener('click', subMenu);
    }
}

function subMenu(e) {
    e.preventDefault();
    console.log(this.closest('li').querySelector('ul'));
    this.closest('li').querySelector('ul').classList.toggle("menu_active");
}
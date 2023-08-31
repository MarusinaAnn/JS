const img = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");

backUp = function () {
    img.width -= 40
    img.heigth -= 40
}

img.onclick = function() {
    img.width += 40
    img.heigth += 40
    clicker__counter.textContent ++
    setTimeout(backUp, 100)
}




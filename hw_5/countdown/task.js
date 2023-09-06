const p=document.getElementById('timer') 

const time = function() {
    if (Number(p.textContent) >= 1) {
        p.textContent = Number(p.textContent) - 1;
    } else if (Number(p.textContent) <= 0) {
        alert('You win!')
        clearInterval(timer);
    }
}

let timer = setInterval(time, 1000);

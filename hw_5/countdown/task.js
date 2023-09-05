const p=document.getElementById('timer') 

const time = function() {
    if (Number(p.textContent) >= 1) {
        p.textContent = Number(p.textContent) - 1;
    } else if (p.textContent = '0') {
        alert('You win!');
    } else if (Number(p.textContent) <= 0) {
        clearInterval(time);
    }
}

setInterval(time, 1000);

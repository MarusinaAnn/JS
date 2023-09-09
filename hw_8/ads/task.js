const rotator = document.querySelectorAll('.rotator__case');
let i = [...rotator].findIndex(i => i.classList.contains('rotator__case_active'));

setInterval( function() {
	rotator[i].classList.toggle('rotator__case_active');
        i++;
        
	if (i == rotator.length) {
		i = 0;
    }    
	rotator[i].classList.toggle('rotator__case_active');
}, 1000 );
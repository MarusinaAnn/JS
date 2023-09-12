interest = document.querySelectorAll('input.interest__check');
console.log(interest[0].closest('ul.interests_active'));

for (let i = 0; i < interest.length; i++) {
    interest[i].addEventListener('click', () => {
        if (interest[i].closest('ul.interests_active') === null) {
            let interestActive = interest[i].closest('li.interest').querySelector('ul.interests_active').children;
            if (interest[i].checked) {
                for (let j = 0; j < interestActive.length; j++) {
                    interestActive[j].firstElementChild.firstElementChild.checked = true;
                };
            } else {
                for (let j = 0; j < interestActive.length; j++) {
                    interestActive[j].firstElementChild.firstElementChild.checked = false;
                };
            };
        };
    });
};
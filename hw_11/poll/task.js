const title = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {

        let objData = xhr.response.data;
        title.innerText = objData.title;

        for (let i = 0; i < objData.answers.length; i++) {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.innerText = objData.answers[i];

            answer.appendChild(button)
        }

        const allAnswer = document.querySelectorAll('.poll__answer');
        for (let btn of allAnswer) {
            btn.addEventListener('click', showWindow);
        }
    }
};

function showWindow () {
    alert('Спасибо, ваш голос засчитан!');
}
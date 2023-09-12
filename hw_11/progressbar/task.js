'use strict';
const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.onsubmit = function (e) {
    e.preventDefault();
    let input = this.elements.file;
    let file = input.files[0];

    if (file) {
        upload(file)
    }
    return false;
};

function upload(file) {
    let xhr = new XMLHttpRequest();
    xhr.onprogress = function (e) {
        progress.value = e.loaded / 100000000;
    }

    let formData = new FormData(form);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
}
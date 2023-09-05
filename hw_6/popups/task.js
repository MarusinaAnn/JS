let popupsArray = Array.from(document.querySelectorAll('div.modal__close_times'))

// popup close function
closePopup();

function closePopup() {
    popupsArray.forEach(function (modal) {
        modal.onclick = function () {
            modal.closest('div.modal').classList.remove('modal_active');
        };
    });
};

// start with modal_main popup
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
modalMain.classList.add('modal_active');

// open modal_success with button
document.querySelector('div.modal a.btn_danger').onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
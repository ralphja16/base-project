'use strict';

let mModal = (function () {

    let     holder          = document.querySelectorAll('.m-modal'),
            body            = document.getElementsByTagName('body')[0],
            modalButton     = document.querySelectorAll('.m-modal__trigger'),
            modalsBg        = document.querySelectorAll('.m-modal__bg'),
            modalcontent    = document.querySelectorAll('.m-modal__content'),
            backdrop        = '<div class="m-modal__backdrop fade in"></div>',
            len             = modalButton.length;

    var openModal = () => {
        body.classList.add('m-modal--open');
        holder.className += ' in';
        holder.style.display = 'block';
        body.innerHTML += backdrop;

    },
    closeModal = (e) => {
        console.log('test');

        // document.querySelector('.m-modal').addEventListener('click', (e) => {
            if(e.target != modalcontent) {
                document.querySelector('.m-modal').style.display = 'none';
                document.querySelector('.m-modal').classList.remove('in');
                body.classList.remove('m-modal--open');
                document.querySelector('.m-modal__backdrop').remove();

            }

        // });


    };
    var bindActions = () => {
        for (var i = 0; i < len; i++) {
            modalButton[i].addEventListener('click', openModal, false);
            modalsBg[i].addEventListener('click', closeModal, false);
            // modalsBg[i].addEventListener('click', close, false);
        }
    };
    var init = () => {
            bindActions();
    };

    return {
        init: init,
    };

}());

mModal.init();

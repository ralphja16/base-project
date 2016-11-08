'use strict';

let mModal = (function () {

    let     holder          = document.querySelector('.m-modal'),
            body            = document.getElementsByTagName('body')[0],
            modalButton     = document.querySelectorAll('.js--m-modal__trigger'),
            span            = document.querySelectorAll('.m-modal__close'),
            len             = modalButton.length;

    var openModal = () => {
        holder.classList.add('is__open');
        body.classList.remove('m-modal--open');
    },
    closeModal = () => {
        holder.classList.remove('is__open');
        body.classList.remove('m-modal--open');
    };

    window.onclick = function(event) {
        if (event.target == holder) {
            holder.classList.remove('is__open');
            body.classList.remove('m-modal--open');
        }
    };

    var bindActions = () => {
        for (var i = 0; i < len; i++) {
            modalButton[i].addEventListener('click', openModal, false);
            span[i].addEventListener('click', closeModal, false);
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

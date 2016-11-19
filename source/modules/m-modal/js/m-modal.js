'use strict';

let mModal = (function () {

    let     body            = document.getElementsByTagName('body')[0],
            modalButton     = document.querySelectorAll('.js--m-modal__trigger'),
            span            = document.querySelectorAll('.m-modal__close'),
            len             = modalButton.length;

    var openModal = (e) => {
        // get data-modal ID of clicked button
        let _hashId = e.target.dataset.modal;

        // strip data-modal from #
        let _id = _hashId.substr(1);

        // Add class to the modal with same ID as data-modal
        document.getElementById(_id).classList.add('is__open');
        body.classList.remove('m-modal--open');
    },
    closeModal = () => {
        document.querySelector('.is__open').classList.remove('is__open');
        body.classList.remove('m-modal--open');
    };

    window.onclick = function(event) {

        if (event.target == document.querySelector('.is__open')) {
            document.querySelector('.is__open').classList.remove('is__open');
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

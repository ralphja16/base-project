// 'use strict';

// const mModal = (function () {

//     let     body            = document.getElementsByTagName('body')[0],
//             modalButton     = document.querySelectorAll('.js--m-modal__trigger'),
//             span            = document.querySelectorAll('.m-modal__close'),
//             len             = modalButton.length;

//     let openModal = (e) => {
//         // get data-modal ID of clicked button
//         let _hashId = e.target.dataset.modal;

//         // strip data-modal from #
//         let _id = _hashId.substr(1);

//         // Add class to the modal with same ID as data-modal
//         document.getElementById(_id).classList.add('is__open');
//         body.classList.remove('m-modal--open');
//     },
//     closeModal = () => {
//         document.querySelector('.is__open').classList.remove('is__open');
//         body.classList.remove('m-modal--open');
//     };

//     window.onclick = (event) => {
//         if (event.target == document.querySelector('.is__open')) {
//             document.querySelector('.is__open').classList.remove('is__open');
//             body.classList.remove('m-modal--open');
//         }
//     };

//     var bindActions = () => {
//         for (let i = 0; i < len; i++) {
//             modalButton[i].addEventListener('click', openModal, false);
//             span[i].addEventListener('click', closeModal, false);
//         }
//     };

//     const init = () => {
//         bindActions();
//     };

//     return {
//         init: init,
//     };

// }());

// const callback = function(){
//     // Handler when the DOM is fully loaded
//     mModal.init();
// };

// if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
//     callback();
// } else {
//     document.addEventListener('DOMContentLoaded', callback);
// }

export class mModal {
    constructor() {
        console.log('test modal');
    }
}

'use strict';
var mModal = (function() {

    let trigger     = document.querySelectorAll('.m-modal__trigger'),
        modals      = document.querySelectorAll('.m-modal'),
        modalsBg    = document.querySelectorAll('.m-modal__bg'),
        content     = document.querySelectorAll('.m-modal__content'),
        closers     = document.querySelectorAll('.m-modal__close'),
        len         = trigger.length;

    var getId = (e) => {
        e.preventDefault();

        var self = this

            console.log(self);
    },
    // close = () => {
    //
    // },
    bindActions = function() {
        for (var i = 0; i < len; i++) {
            trigger[i].addEventListener('click', getId, false);
            // closers[i].addEventListener('click', close, false);
            // modalsBg[i].addEventListener('click', close, false);
        }
    },
    init = function() {
        bindActions();
    };

    return {
        init: init
    };

}());

mModal.init();

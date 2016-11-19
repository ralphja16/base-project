'use strict';

let mTabs = (function () {

    let len             = len.length;



    var bindActions = () => {
        for (var i = 0; i < len; i++) {
            // modalButton[i].addEventListener('click', openModal, false);
            // span[i].addEventListener('click', closeModal, false);
        }
    };
    var init = () => {
        bindActions();
    };

    return {
        init: init,
    };

}());

mTabs.init();

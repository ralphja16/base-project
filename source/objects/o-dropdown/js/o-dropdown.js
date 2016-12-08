'use strict';

var oDropdown = (function () {

    let     holder          = document.querySelector('.o-dropdown'),
            dropdownButton  = document.querySelector('.o-dropdown-toggle');

    let triggerClickListener = () => {
        dropdownButton.onclick = () => {
            holder.classList.toggle('is--open');
        };
    };

    var init = () => {
        triggerClickListener();
    };

    return {
        init: init,
    };

}());

oDropdown.init();

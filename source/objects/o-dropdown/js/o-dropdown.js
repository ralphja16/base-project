'use strict';

const oDropdown = (function () {

    let     holder          = document.querySelector('.o-dropdown'),
            dropdownButton  = document.querySelector('.o-dropdown-toggle');

    let triggerClickListener = () => {
        dropdownButton.onclick = () => {
            holder.classList.toggle('is--open');
        };
    };

    const init = () => {
        triggerClickListener();
    };

    return {
        init: init,
    };

}());


const callback = function(){
    // Handler when the DOM is fully loaded
    oDropdown.init();
};

if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
    callback();
} else {
    document.addEventListener('DOMContentLoaded', callback);
}

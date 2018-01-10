'use strict';

const oDropdown = (function () {

    let     holder          = document.querySelectorAll('.o-dropdown'),
            len             = holder.length;

    let triggerClickListener = (e) => {
        e.target.parentNode.classList.toggle('is--open');
    };

    let bindActions = () => {
        for (let i = 0; i < len; i++) {
            holder[i].addEventListener('click', triggerClickListener, false);
        }
    };

    const init = () => {
        bindActions();
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

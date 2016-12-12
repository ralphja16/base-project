'use strict';

const mTabs = (function () {

    const holder          = document.querySelector('.m-tabs');
    const tab             = holder.querySelector(`.m-tabs__item`);
    const tabPane         = holder.querySelector(`.m-tabs__pane`);

    let triggerClickListener = (e) => {
        tab.onclick = (e) => {
            // holder.classList.toggle('is--open');
            console.log(this);
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
    mTabs.init();
};

if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
    callback();
} else {
    document.addEventListener('DOMContentLoaded', callback);
}

'use strict';

const mTabs = (function (holder) {

    let tabItem         = document.querySelectorAll('.m-tabs__item__link'),
        tabPane         = document.querySelectorAll('.m-tabs__pane'),
        tabSelectbox    = document.querySelector('.m-tabs__nav__selectbox'),
        activeIndex     = 0,
        initCalled      = false;

    let setup = () => {
        if (!initCalled) {
            initCalled = true;

            for (var i = 0; i < tabItem.length; i++) {
                var link = tabItem[i];
                triggerClickListener(link, i);
            }
        }
    },
    triggerClickListener = (link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            goToTab(index);
            tabSelectbox.selectedIndex = index;
        });
    },
    goToTabMobile = () => {
        tabSelectbox.addEventListener('change', () => {
            let index = tabSelectbox.value;
            goToTab(index);
        });
    },
    goToTab = (index) => {
        if (index !== activeIndex && index >= 0 && index <= tabItem.length) {
            tabItem[activeIndex].parentNode.classList.remove('m-tabs__item--selected');
            tabItem[index].parentNode.classList.add('m-tabs__item--selected');
            tabPane[activeIndex].classList.remove('m-tabs__pane--active');
            tabPane[index].classList.add('m-tabs__pane--active');
            activeIndex = index;
        }
    };


    const init = () => {
        if(holder.length > 0)  {
            setup();
            goToTabMobile();
        }
    };

    return {
        init: init,
        goToTab: goToTab,
    };


})(document.querySelectorAll('.m-tabs'));

const callback = function(){
    // Handler when the DOM is fully loaded
   mTabs.init();
};

if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
    callback();
} else {
    document.addEventListener('DOMContentLoaded', callback);
}

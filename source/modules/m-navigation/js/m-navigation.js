(function(window) {

'use strict';

	const Navigation = (function() {

		var _this = this;

		const init = () => {
			console.log('test')
		};

		return {
			init: init,
		};
	});

	const callback = function(){
	    // Handler when the DOM is fully loaded
	    window.Navigation = Navigation().init();
	    console.log(window);
	};

	if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
	    callback();
	} else {
	    document.addEventListener('DOMContentLoaded', callback);
	}


})(window);


// const callback = function(){
//     // Handler when the DOM is fully loaded
//     var mNavigation = new Navigation();
// };

// if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
//     callback();
// } else {
//     document.addEventListener('DOMContentLoaded', callback);
// }

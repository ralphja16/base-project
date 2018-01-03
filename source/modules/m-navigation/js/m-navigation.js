(function(window) {
	'use strict';

	class Navigation {
		constructor(holder) {
			this.holder = holder;
			this.navItems = document.querySelectorAll(
				'.m-navigation .m-navigation__item'
			);

			this.activeClass = 'is--active';
			this.initEventHandler();
		}

		show(item) {
			item.classList.add(this.activeClass);
		}

		hide(item) {
			item.classList.remove(this.activeClass);
		}

		initEventHandler() {
			const _this = this;

			for (let i = 0; i < this.navItems.length; i++) {
				const item = this.navItems[i];

				if (item.querySelector('.m-navigation__submenu')) {
					item.addEventListener('click', function(e) {
						e.preventDefault();

						if (this.classList.contains(_this.activeClass)) {
							_this.hide(this);
						} else {
							_this.show(this);
						}
					});
				}
			}
		}
	}

	window.Navigation = Navigation;
})(window);

const holder = document.querySelectorAll('.m-navigation');
const navigation = new Navigation(holder);

// (function(window) {
// 	'use strict';

// 	const Navigation = function(holder) {
// 		var _this = this;

// 		const init = () => {
// 			console.log(holder);
// 			console.log('test');
// 			this.clickListener();
// 		};

// 		this.clickListener = () => {};

// 		return {
// 			init: init
// 		};
// 	};

// 	const callback = function() {
// 		// Handler when the DOM is fully loaded
// 		window.Navigation = Navigation().init();
// 		console.log(window);
// 	};

// 	if (
// 		document.readyState === 'complete' ||
// 		(document.readyState !== 'loading' &&
// 			!document.documentElement.doScroll)
// 	) {
// 		callback();
// 	} else {
// 		document.addEventListener('DOMContentLoaded', callback);
// 	}
// })(window);

// const callback = function() {
// 	// Handler when the DOM is fully loaded
// 	var mNavigation = new Navigation('.m-navigation');
// };

// if (
// 	document.readyState === 'complete' ||
// 	(document.readyState !== 'loading' && !document.documentElement.doScroll)
// ) {
// 	callback();
// } else {
// 	document.addEventListener('DOMContentLoaded', callback);
// }

// export default Navigation;

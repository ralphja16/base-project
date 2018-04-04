import $ from 'jquery';

export class Navigation {
	constructor(options) {
		if (options === null) {
			options = {};
		}

		this.options = options;
		this.initialize();
	}

	setup() {
		this.$holder = $('.js--m-navigation');
		this.$navItems = this.$holder.find('.m-navigation__item');
		this.$toggleButton = this.$holder.find('.m-navigation__toggle');
		this.activeClass = 'is--active';
	}

	show(item) {
		item.classList.add(this.activeClass);
	}

	hide(item) {
		item.classList.remove(this.activeClass);
	}

	mobileToggle(holder) {
		this.toggleButton.addEventListener('click', function() {
			holder.classList.toggle('is--open');
		});
	}

	initEventHandler() {
		const _this = this;

		for (let i = 0; i < this.$navItems.length; i++) {
			const item = this.$navItems[i];

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

	initialize() {
		this.setup();
		this.initEventHandler();
	}
}

new Navigation();

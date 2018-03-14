class Navigation {
	constructor(holder) {
		this.holder = document.querySelector(holder);
		this.navItems = this.holder.querySelectorAll('.m-navigation__item');
		this.toggleButton = this.holder.querySelector('.m-navigation__toggle');
		this.activeClass = 'is--active';
		this.initEventHandler();
		// this.mobileToggle(this.holder);
	}

	show(item) {
		item.classList.add(this.activeClass);
	}

	hide(item) {
		item.classList.remove(this.activeClass);
	}

	mobileToggle(holder) {
		this.toggleButton.addEventListener('click', function() {
			const iconElement = this.firstElementChild;
			const bars = 'fa-bars';
			const cross = 'fa-times';
			holder.classList.toggle('is--open');
		});
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

const navigation = new Navigation('.m-navigation');

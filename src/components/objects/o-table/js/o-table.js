import $ from 'jquery';

const Table = (($) => {
	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME = 'table';
	const JQUERY_NO_CONFLICT = $.fn[NAME];

	const ClassName = {
		TABLE: 'table'
	};

	const Selector = {
		TABLE: '.table'
	};

	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Table {
		constructor(element) {
			this._element = element;
			console.log('test table');
		}

		// Public

		// Static

		static _jQueryInterface(config) {
			return this.each(function() {
				console.log(config);
				const $element = $(this);

				console.log($element);

				// let data = $element.data(DATA_KEY);

				// if (!data) {
				// 	data = new Alert(this);
				// 	$element.data(DATA_KEY, data);
				// }

				// if (config === 'close') {
				// 	data[config](this);
				// }
			});
		}
	}

	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */

	$(document).on('click', Selector.TABLE, (event) => {
		event.preventDefault();

		let table = event.target;

		if (!$(table).hasClass(ClassName.TABLE)) {
			table = $(table).closest(Selector.TABLE);
		}

		Table._jQueryInterface.call($(table), 'toggle');
	});

	$(document).ready(function() {
		if ($(Selector.TABLE).length > 0) {
			{
				Table._jQueryInterface.call($(Selector.TABLE), 'setup');
			}
		}
	});

	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	$.fn[NAME] = Table._jQueryInterface;
	$.fn[NAME].Constructor = Table;
	$.fn[NAME].noConflict = function() {
		$.fn[NAME] = JQUERY_NO_CONFLICT;
		return Table._jQueryInterface;
	};

	return Table;
})($);

export default Table;

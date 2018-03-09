jQuery.extend({
	Content: function(holder) {
		// VERSION : 170215

		// PUBLIC
		var _this = this;

		var _private = {
			// PRIVATE OBJECTS
			holder: null,
			table: null,

			// PRIVATE FUNCTIONS
			setup: function() {
				_private.holder = $(holder);
				_private.table = $('table');
			},
			wrapTable: function() {
				_private.table.wrap(
					"<div class='o-table__responsive-wrapper'></div>"
				);
			}
		};

		function initialize() {
			_private.setup();
			_private.wrapTable();
		}
		initialize();
	}
});

$(function() {
	var Content = new $.Content($('.js--m-content'));
});

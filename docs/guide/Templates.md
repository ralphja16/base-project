# Templates

## SCSS

SCSS template
For object component file you need to change `$module` in `$object`.

```scss
@charset "UTF-8";

/* =============================================================================
  CONFIG
============================================================================= */

$module-name: 'navigation';

// Your component variables here

/* =============================================================================
  BASE
============================================================================= */

.m-#{$module-name} {
	// Your styling in here
}
```

## jQuery

```javscript
jQuery.extend({
	Navigation: function(holder) {
		// VERSION : 180311

		// PUBLIC
		var _this = this;

		var _private = {
			// PRIVATE OBJECTS
			holder: null,
			delayTiming: null,
			animationTiming: null,
			counter: null,
			userInteraction: null,
			button: null,

			// PRIVATE FUNCTIONS
			setup: function() {
				_private.holder = $(holder);
				_private.delayTiming = 5000;
				_private.animationTiming = 500;
				_private.counter = 0;
				_private.userInteraction = false;
				_private.button = _private.holder.find('.o-btn');
			},
			eventListeners: function() {
				_private.button.bind('click', function(e) {
					e.preventDefault();

					// Run some code / function
				});
			},
		};

		// WINDOW RESIZE
		function doResize() {
			// Place here your code that needs to be runned on resize
		}

		var resizeTimer;
		$(window).resize(function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(doResize, 200);
		});

		function initialize() {
			// Place here functions that need to runned on initializion
			_private.setup();
			_private.eventListeners();
		}

		$(document).ready(function() {
			initialize();
		});
	}
});

$(function() {
	// Scope your jQuery plugin on a selector
	//Give your jQuery plugin a unique name
	var Navigation = new $.Navigation($('.js--m-navigation'));
});
```

## Javascript ES6

Coming soon

## React

Coming soon

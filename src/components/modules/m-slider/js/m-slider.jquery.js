jQuery.extend({
	Slider: function(holder) {
		// VERSION : 150714

		// PUBLIC
		var _this = this;

		var _private = {
			// PRIVATE OBJECTS
			holder: 0,
			container: null,
			slide: null,
			totalSlides: null,
			slideWidth: null,
			slideDelay: null,
			slideAnimation: null,
			hasAutoSlider: null,
			hasNavigation: null,
			hasDots: null,
			dotContainer: null,
			prevButton: null,
			nextButton: null,

			// PRIVATE FUNCTIONS
			setup: function() {
				_private.holder = $(holder);
				_private.slideDelay = 5000;
				_private.slideAnimation = 500;
				_private.counter = 0;
				_private.userInteraction = false;
				_private.wrapper = _private.holder.find('.o-slider__wrapper');
				_private.hasAutoSlider = _private.holder.data('autoslide');
				_private.hasNavigation = _private.holder.data('navigation');
				_private.hasDots = _private.holder.data('dots');

				_private.container = _private.holder.find(
					'.m-slider__container'
				);
				_private.slide = _private.container.find('.m-slider__item');
				_private.slideWidth = _private.holder.width();
				_private.totalSlides = _private.slide.length;
				_private.lastSlide = _private.totalSlides - 1;

				_private.slide.width(_private.slideWidth);

				// Dots
				_private.dotContainer = _private.holder.find('.m-slider__dots');

				// Navigation buttons
				_private.prevButton = _private.holder.find('.btn--prev');
				_private.nextButton = _private.holder.find('.btn--next');

				if (_private.hasAutoSlider === true) {
					_private.startAutoSlide();
				}

				if (_private.hasDots === true) {
					_private.addDots();
				}
			},
			eventListeners: function() {
				_private.nextButton.bind('click', function(e) {
					e.preventDefault();
					_private.userInteraction = true;
					_private.slideRight();
					_private.stopAutoSlide();
				});

				_private.prevButton.bind('click', function(e) {
					e.preventDefault();
					_private.userInteraction = true;
					_private.slideLeft();
					_private.stopAutoSlide();
				});

				if (_private.hasAutoSlider === true) {
					_private.holder.mouseenter(function() {
						_private.stopAutoSlide();
					});

					_private.holder.mouseleave(function() {
						if (_private.userInteraction === false) {
							_private.startAutoSlide();
						}
					});
				}
			},

			slideTo: function(target) {
				$('.m-slider__dot')
					.removeClass('is--active')
					.eq(target)
					.addClass('is--active');
				_private.container.animate(
					{
						left: -_private.slideWidth * target
					},
					_private.slideAnimation,
					function() {}
				);
			},

			calcContainer: function() {
				_private.wrapper.width(_private.slideWidth);
				_private.holder.width(_private.slideWidth);
				var containerwidth = _private.slideWidth * _private.totalSlides;

				_private.container.css({
					width: containerwidth
				});
			},
			startAutoSlide: function() {
				_private.autoSlider = setInterval(function() {
					_private.slideRight();
				}, _private.slideDelay);
			},
			stopAutoSlide: function() {
				clearInterval(_private.autoSlider);
			},
			slideLeft: function() {
				_private.counter--;

				if (_private.counter < 0) {
					_private.counter = _private.totalSlides - 1;
					_private.container.animate(
						{
							left:
								'-=' +
								_private.slideWidth * (_private.totalSlides - 1)
						},
						_private.slideAnimation,
						function() {}
					);
				} else {
					_private.container.animate(
						{
							left: '+=' + _private.slideWidth
						},
						_private.slideAnimation,
						function() {}
					);
				}

				_private.updateDots(_private.counter);
			},
			slideRight: function() {
				_private.counter++;

				if (_private.counter === _private.totalSlides) {
					_private.counter = 0;
					_private.container.animate(
						{
							left: ''
						},
						_private.slideAnimation,
						function() {
							_private.container.css('left', '');
						}
					);
				} else {
					_private.container.animate(
						{
							left: '-=' + _private.slideWidth
						},
						_private.slideAnimation,
						function() {}
					);
				}
				_private.updateDots(_private.counter);
			},
			addDots: function() {
				_private.slide.each(function(index) {
					_private.dotContainer.append(
						'<li class="m-slider__dot" data-id="' +
							(index + 1) +
							'"></li>'
					);
				});

				$('.m-slider__dot')
					.first()
					.addClass('is--active');
				_private.slide
					.first()
					.next()
					.addClass('is--active');

				$('.m-slider__dot').bind('click', function() {
					_private.userInteraction = true;
					var target = $(this).index();
					var id = $(this).data('id');
					_private.counter = target;
					_private.stopAutoSlide();
					_private.slideTo(target);
				});
			},
			updateDots: function(target) {
				$('.m-slider__dot').removeClass('is--active');
				$('.m-slider__dot')
					.eq(target)
					.addClass('is--active');
			}
		};

		// WINDOW RESIZE
		function doResize() {
			//_private.setup();
			//_private.calcContainer();

			// Reset widths
			_private.slide.css('width', 'auto');
			_private.holder.css('width', 'auto');

			// Update widths
			_private.slideWidth = _private.holder.width();

			_private.slide.width(_private.slideWidth);

			_private.calcContainer();

			var newLeft = parseInt(_private.counter * _private.slideWidth);
			_private.container.css('left', -newLeft);

			//Active item
		}

		var resizeTimer;
		$(window).resize(function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(doResize, 200);
		});

		function initialize() {
			_private.setup();
			_private.calcContainer();
			_private.eventListeners();
		}

		$(document).ready(function() {
			initialize();
		});
	}
});

$(function() {
	var Slider = new $.Slider($('.js--m-slider'));
});

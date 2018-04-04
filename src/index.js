import './index.scss';
import $ from 'jquery';

import { Content, Navigation } from './components/modules/index';
import Slider from './components/modules/m-slider/js/m-slider.jquery';

/**
 * --------------------------------------------------------------------------
 * jQuery Detection
 * --------------------------------------------------------------------------
 */

($) => {
	if (typeof $ === 'undefined') {
		throw new TypeError(
			'Frontend Starter kit requires jQuery. Jquery must be included before the framework javascript.'
		);
	}
};

/**
 * --------------------------------------------------------------------------
 * Resize Listeners
 * --------------------------------------------------------------------------
 */

window.onresize = function(event) {
	console.log('resizing');
};

// import wrapTable from './components/modules/m-content/js/m-content';

// wrapTable();

/**
 * --------------------------------------------------------------------------
 * Scroll  Listeners
 * --------------------------------------------------------------------------
 */

const doResize = (event) => {
	console.log('scrolling');
};

window.addEventListener('scroll', doResize);

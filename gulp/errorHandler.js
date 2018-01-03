const notify = require('gulp-notify');

module.exports = {
	onError: function(err) {
		console.log(err);
		notify.onError({
			title: 'Gulp error in ' + err.plugin,
			message: err.toString()
		})(err);
	}
};

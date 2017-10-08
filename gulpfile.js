var gulp = require('gulp');

//This package uses Image Magick to resize images
var imageResize = require('gulp-image-resize');

gulp.task('resize', function() {
	return gulp.src('app/views/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 360,
			height: 270,
			crop: true,
			upscale: false
		}))
		.pipe(gulp.dest('dist/views/images'));
});


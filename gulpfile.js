var gulp = require('gulp');

//This package uses Image Magick to resize images
var imageResize = require('gulp-image-resize');

//Package used for compressing images
var imagemin = require('gulp-imagemin');

//Package to run gulp task sequentially, one after the other.
var runSequence = require('run-sequence');

var connect = require('gulp-connect');



gulp.task('resizePizzeria', function() {
	return gulp.src('dist/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 360,
			height: 270,
			crop: true,
			upscale: false
		}))
		.pipe(gulp.dest('dist/images/'));
});

gulp.task('compressHeavyImages', function(){
	return gulp.src('app/views/images/**/*.+(png|jpg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});


gulp.task('optimizeImages', function(callback){
	runSequence('compressHeavyImages','resizePizzeria')
});












/*
gulp.task('createThumbnails', function(callback){
		runSequence(['resizePizzeria', 'resizeImages'], callback);
});*/




var gulp = require('gulp');

//This package uses Image Magick to resize images
var imageResize = require('gulp-image-resize');

//Package used for compressing images
var imagemin = require('gulp-imagemin');

//Package to run gulp task sequentially, one after the other.
var runSequence = require('run-sequence');

var connect = require('gulp-connect');



gulp.task('resizePizzeria', function() {
	return gulp.src('app/views/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 100,
			height: 61,
			crop: true,
			upscale: false
		}))
		.pipe(gulp.dest('app/img/thumbnails'));
});

gulp.task('webserver', function(){
	connect.server();
})










/*
gulp.task('createThumbnails', function(callback){
		runSequence(['resizePizzeria', 'resizeImages'], callback);
});*/




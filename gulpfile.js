

var gulp = require('gulp');

//This package uses Image Magick to resize images
var imageResize = require('gulp-image-resize');

//Package used for compressing images
var imagemin = require('gulp-imagemin');

var imageminMozjpeg = require('imagemin-mozjpeg');

var imageminPngquant = require('imagemin-pngquant');

var uglify = require('gulp-uglify');

var cssnano = require('gulp-cssnano');

var minifyInline = require('gulp-minify-inline');

//Package to run gulp task sequentially, one after the other.
var runSequence = require('run-sequence');



gulp.task('minify-inline', function() {
	return gulp.src('app/**/*.html')
		.pipe(minifyInline())
		.pipe(gulp.dest('dist'))
});

gulp.task('uglify', function(){
	return gulp.src('app/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('cssnano', function(){
	return gulp.src('app/css/print.css')
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'))
});




gulp.task('resizePizzeria', function() {
	return gulp.src('app/views/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 360,
			height: 270,
			crop: true,
			upscale: false
		}))
		.pipe(gulp.dest('dist/views/images/'));
});


gulp.task('compressPizzeria', function(){
	return gulp.src(['dist/views/images/**/*.{jpg,png}'])
		.pipe(imagemin([
			imageminMozjpeg({
				quality: 90
			})
		]))
		.pipe(gulp.dest('dist/views/images'));

});

gulp.task('compressPizza', function(){
	return gulp.src(['app/views/images/**/*.png'])
		.pipe(imagemin([
			imageminPngquant({
				speed: 1,
				quality: 98
			})

			]))
		.pipe(gulp.dest('dist/views/images'));
});


gulp.task('pizzeriaThumbnail', function(){
	return gulp.src('dist/views/images/pizzeria.jpg')
		.pipe(imageResize({
			width: 100,
			height: 61,
			crop: true,
			upscale: false
		}))
		.pipe(gulp.dest('dist/img/thumbnails/'));
});


gulp.task('compressOtherImages', function(){
	return gulp.src(['app/img/**/*.{jpg,png}'])
		.pipe(imagemin([
			 imageminMozjpeg({
			 	quality: 90
			 }),
			 imageminPngquant({
			 	speed: 1,
			 	quality: 98
			 })

			]))
		.pipe(gulp.dest('dist/img/'));
});





gulp.task('build', function(callback){
	runSequence('resizePizzeria',
				'compressPizzeria',
				'compressPizza',
				'pizzeriaThumbnail',
				'compressOtherImages',
				'minify-inline',
				'uglify',
				'cssnano'
		);
});





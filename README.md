# Website Performance Optimization portfolio project
----------------------------------------------------------

This project shows different optimizations peformed to the
udacity's [frontend-nanodegree-mobile-portfolio](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).


## PREFACE - READ THIS FIRST
This project has two versions: the optimized/compressed/minified version, and the
optimized/non-compressed/non-minified version; please see File Structure section
for more information. The project works as is, and if you wish to see the final
product, it's all under the dist directory (optimized/compressed/minified version).

**NOTE: This project uses Gulp as a build tool, along with other plugins. Please
see the installation section for more information. In fact make sure you install
Gulp and get familiarized with it first. This is only necessary if you wish to build
the project yourself**

If you wish to see all the improvements made to the original project in a readable
format, then you can see the project under the app directory. In the end, both
folders contain the exact same html,css, and js. The only difference is that the
dist directory contains compressed images and minified css and js. All css and html
are inlined, therefor the only js and css files included are non-render/non-parser
blocking. If you wish to see the documented changes done to main.js, please see the
main.js file under the app/views/js.

## FILE STRUCTURE - IMPORTANT!
It is very important that the following files are included in your project.
They must follow the parent/child relationship outlined, in order for the
build command to work:

Your-project-name
- **app**/
  - **css**/
    - print.css
  - **img**/
	- 2048.png
	- cam_be_like.jpg
	- mobilewebdev.jpg
	- profilepic.jpg
    - **thumbnails**/
      - 2048.jpg
      - mobile.jpg
      - webperf.jpg
  - **js**/
	- perfmatter.js
  - **views**/
    - **images**/
      - pizza.png
	  - pizzeria.jpg
    - pizza.html -- inlined: main.js, bootstrap-grid.css, style.css
  - index.html -- inlined: style.css
  - project-2048.html -- inlined: style.css
  - project-mobile.html -- inlined: style.css
  - project-webperf.html -- inlined: style.css
- **node_modules**/
- gulpfile.js
- package.json


### After running the build command, your file structure should look something like this:

Your-project-name
- **app**/
- .
- .
- .
- **dist**/
  - **css**/
    - print.css - minified
  - **img**/
	- 2048.png - compressed
	- cam_be_like.jpg - compressed
	- mobilewebdev.jpg - compressed
	- profilepic.jpg - compressed
    - **thumbnails**/
      - 2048.jpg - compressed
      - mobile.jpg - compressed
      - webperf.jpg - compressed
      - pizzeria.jpg - new file created
  - **js**/
	- perfmatter.js
  - **views**/
    - **images**/
      - pizza.png
	  - pizzeria.jpg
    - pizza.html -- inlined: main.js, bootstrap-grid.css, style.css
  - index.html -- minified inline style.css
  - project-2048.html -- minified inline style.css
  - project-mobile.html -- minified inline style.css
  - project-webperf.html -- minified inline style.css
- **node_modules**/
- gulpfile.js
- package.json


## BUILD INSTRUCTIONS - DEPENDENCIES

*(In case you are wondering, npm installation instructions are provided to you in the Gulp Task Manager tutorial).*

### Gulp Task Manager
This project uses **[Gulp Task Manager](https://gulpjs.com/)**. For instructions on how to use/install gulp, please go **[HERE](https://css-tricks.com/gulp-for-beginners/)**.

This project uses **Gulp** in conjunction with the
following **npm** dependencies:


### gulp-image-resize
A library for resizing images. Go [here](https://www.npmjs.com/package/gulp-image-resize) for usage and installation instructions.


### gulp-imagemin
A library used for image compression. Although it is
possible to achieve lossless compresion without any third party libraries, the compression level is not what we want for the images. Go [here](https://www.npmjs.com/package/gulp-imagemin) for usage and installation instructions.

### imagemin-mozjpeg
A library used in conjuction with gulp-imagemin. This allows for lossy compression of **jpg** images.
Go [here](https://www.npmjs.com/package/imagemin-mozjpeg) for usage and installation instructions.

### imagemin-pngquant
A library used in conjuction with gulp-imagemin.
This allows for lossy compression of **png** images.
Go [here](https://www.npmjs.com/package/imagemin-pngquant) for usage and installation instructions.

### gulp-uglify
A library used for minification of external **js** files.
Go [here](https://www.npmjs.com/package/gulp-uglify) for usage and installation instructions.

### gulp-cssnano
A library used for the minification of external **css** files. Go [here](https://www.npmjs.com/package/gulp-cssnano) for usage and installation instructions.

### gulp-minify-inline
A library used for minification of inlined css and js
in html files.Go [here](https://www.npmjs.com/package/gulp-minify-inline) for usage and installation instructions.

### run-sequence
A library used for running sequential gulp tasks.
Go [here](https://www.npmjs.com/package/run-sequence)for usage and installation instructions.


## USAGE INSTRUCTIONS

### I just wanna see your page score at Google PageInsights:
You can see the hosted version of this project [here](https://fboydc.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html).

To analyze/test the website, just go [here](https://developers.google.com/speed/pagespeed/insights/), paste
these two URLs and analyze them independently:

1. https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffboydc.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fdist%2Findex.html

2. https://fboydc.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html


### I wanna create the minified/optimized/compressed version of the project myself, please:
Awesome! first read the build instructions and go to the Gulp Task Manager tutorial; that will get
you started with NPM and Gulp. Next, just go to each of the links provided to install the
remaining dependencies, and you are all set. After that, you will have a node_modules directory,
a package.json, and a gulpfile.js file under you root folder. Final step, user your terminal
to navigate to the root directory of your project and type "gulp build". This will create a
dist folder containing the minified/optimized/compressed version. Keep in mind that in contrast
to the master repo hosted by udacity, I have inlined all the ATF css and js. This step is needed
for the best possible optimization.

Cheers :)!












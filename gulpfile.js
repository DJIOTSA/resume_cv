const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
// const purgecss = require("gulp-purgecss") // this module will be used to remove all the css element that we are not using

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')  // Source folder
        .pipe(sass().on('error', sass.logError))
        // .pipe(purgecss({ content: ["*.html"]})) // this remove all the css code that is not used on our html files
        .pipe(gulp.dest('assets/css'));        // Destination folder
});

gulp.task('watch', function () {
    // to make that gulp watch all the .scss and .html files (.html WILL BE ADDED AT THE END of the development)
    // this to make sure that if a css element is added on html the css will automatically add the element to the css
    // since we are removing all the elements that are not used in our html files
    gulp.watch(['./assets/scss/**/*.scss', ], gulp.series('sass')); 
});

gulp.task('default', gulp.series('sass', 'watch'));

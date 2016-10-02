var gulp = require('gulp');
var gulpUtil = require('gulp-util');
const eslint = require('gulp-eslint');

gulp.task('default', ['lint-fix', 'lint'], function() {
  return gulpUtil.log('Gulp is running...');
});

gulp.task('lint', function() {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(['**/*.js', '!node_modules/**'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('lint-fix', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulp.dest('.'));// <-- update original files
});

const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');

gulp.task('clean-dist', () => {
  del.sync('dist.zip', {force: true})
});

gulp.task('dist', ['clean-dist'], () =>
  gulp.src(['build/**/*', 'package.json'])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'))
);


gulp.task('default', ['dist']);


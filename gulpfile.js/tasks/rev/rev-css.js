var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revDel    = require('gulp-rev-delete-original')

// 3) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', function(){
  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest,'**/*.css'))
    .pipe(rev())
    .pipe(gulp.dest(PATH_CONFIG.dest))
    .pipe(revDel())
    .pipe(rev.manifest(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
